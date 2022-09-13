import { ButtonStyles, MessageComponentTypes } from "../deps.ts";
export function validateComponents(bot, components) {
    if (!components?.length) return;
    let actionRowCounter = 0;
    for (const component of components){
        actionRowCounter++;
        // Max of 5 ActionRows per message
        if (actionRowCounter > 5) throw new Error("Too many action rows.");
        // Max of 5 Buttons (or any component type) within an ActionRow
        if (component.components?.length > 5) {
            throw new Error("Too many components.");
        } else if (component.components?.length > 1 && component.components.some((subComponent)=>subComponent.type === MessageComponentTypes.SelectMenu
        )) {
            throw new Error("Select component must be alone.");
        }
        for (const subComponent1 of component.components){
            if (subComponent1.customId && !bot.utils.validateLength(subComponent1.customId, {
                max: 100
            })) {
                throw new Error("The custom id in the component is too big.");
            }
            // 5 Link buttons can not have a customId
            if (subComponent1.type === MessageComponentTypes.Button) {
                if (subComponent1.style === ButtonStyles.Link && subComponent1.customId) {
                    throw new Error("Link buttons can not have custom ids.");
                }
                // Other buttons must have a customId
                if (!subComponent1.customId && subComponent1.style !== ButtonStyles.Link) {
                    throw new Error("The button requires a custom id if it is not a link button.");
                }
                if (!bot.utils.validateLength(subComponent1.label, {
                    max: 80
                })) {
                    throw new Error("The label can not be longer than 80 characters.");
                }
                subComponent1.emoji = makeEmojiFromString(subComponent1.emoji);
            }
            if (subComponent1.type === MessageComponentTypes.SelectMenu) {
                if (subComponent1.placeholder && !bot.utils.validateLength(subComponent1.placeholder, {
                    max: 150
                })) {
                    throw new Error("The component placeholder can not be longer than 150 characters.");
                }
                if (subComponent1.minValues) {
                    if (subComponent1.minValues < 1) {
                        throw new Error("The min values must be more than 1 in a select component.");
                    }
                    if (subComponent1.minValues > 25) {
                        throw new Error("The min values must be less than 25 in a select component.");
                    }
                    if (!subComponent1.maxValues) {
                        subComponent1.maxValues = subComponent1.minValues;
                    }
                    if (subComponent1.minValues > subComponent1.maxValues) {
                        throw new Error("The select component can not have a min values higher than a max values.");
                    }
                }
                if (subComponent1.maxValues) {
                    if (subComponent1.maxValues < 1) {
                        throw new Error("The max values must be more than 1 in a select component.");
                    }
                    if (subComponent1.maxValues > 25) {
                        throw new Error("The max values must be less than 25 in a select component.");
                    }
                }
                if (subComponent1.options.length < 1) {
                    throw new Error("You need at least 1 option in the select component.");
                }
                if (subComponent1.options.length > 25) {
                    throw new Error("You can not have more than 25 options in the select component.");
                }
                let defaults = 0;
                for (const option of subComponent1.options){
                    if (option.default) {
                        defaults++;
                        if (defaults > (subComponent1.maxValues || 25)) {
                            throw new Error("You chose too many default options.");
                        }
                    }
                    if (!bot.utils.validateLength(option.label, {
                        max: 25
                    })) {
                        throw new Error("The select component label can not exceed 25 characters.");
                    }
                    if (!bot.utils.validateLength(option.value, {
                        max: 100
                    })) {
                        throw new Error("The select component value can not exceed 100 characters.");
                    }
                    if (option.description && !bot.utils.validateLength(option.description, {
                        max: 50
                    })) {
                        throw new Error("The select option description can not exceed 50 characters.");
                    }
                    option.emoji = makeEmojiFromString(option.emoji);
                }
            }
        }
    }
}
function makeEmojiFromString(emoji) {
    if (!emoji) return;
    if (typeof emoji !== "string") {
        return {
            id: emoji.id ? BigInt(emoji.id) : undefined,
            name: emoji.name,
            animated: emoji.animated
        };
    }
    // A snowflake id was provided
    if (/^[0-9]+$/.test(emoji)) {
        emoji = {
            id: BigInt(emoji)
        };
    } else {
        // A unicode emoji was provided
        emoji = {
            name: emoji
        };
    }
    return emoji;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3QsIEJ1dHRvblN0eWxlcywgRW1vamksIE1lc3NhZ2VDb21wb25lbnRzLCBNZXNzYWdlQ29tcG9uZW50VHlwZXMgfSBmcm9tIFwiLi4vZGVwcy50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb21wb25lbnRzKGJvdDogQm90LCBjb21wb25lbnRzOiBNZXNzYWdlQ29tcG9uZW50cykge1xuICBpZiAoIWNvbXBvbmVudHM/Lmxlbmd0aCkgcmV0dXJuO1xuXG4gIGxldCBhY3Rpb25Sb3dDb3VudGVyID0gMDtcblxuICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgYWN0aW9uUm93Q291bnRlcisrO1xuICAgIC8vIE1heCBvZiA1IEFjdGlvblJvd3MgcGVyIG1lc3NhZ2VcbiAgICBpZiAoYWN0aW9uUm93Q291bnRlciA+IDUpIHRocm93IG5ldyBFcnJvcihcIlRvbyBtYW55IGFjdGlvbiByb3dzLlwiKTtcblxuICAgIC8vIE1heCBvZiA1IEJ1dHRvbnMgKG9yIGFueSBjb21wb25lbnQgdHlwZSkgd2l0aGluIGFuIEFjdGlvblJvd1xuICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50cz8ubGVuZ3RoID4gNSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9vIG1hbnkgY29tcG9uZW50cy5cIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGNvbXBvbmVudC5jb21wb25lbnRzPy5sZW5ndGggPiAxICYmXG4gICAgICBjb21wb25lbnQuY29tcG9uZW50cy5zb21lKChzdWJDb21wb25lbnQpID0+IHN1YkNvbXBvbmVudC50eXBlID09PSBNZXNzYWdlQ29tcG9uZW50VHlwZXMuU2VsZWN0TWVudSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlbGVjdCBjb21wb25lbnQgbXVzdCBiZSBhbG9uZS5cIik7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzdWJDb21wb25lbnQgb2YgY29tcG9uZW50LmNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc3ViQ29tcG9uZW50LmN1c3RvbUlkICYmXG4gICAgICAgICFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgoc3ViQ29tcG9uZW50LmN1c3RvbUlkLCB7IG1heDogMTAwIH0pXG4gICAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGN1c3RvbSBpZCBpbiB0aGUgY29tcG9uZW50IGlzIHRvbyBiaWcuXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyA1IExpbmsgYnV0dG9ucyBjYW4gbm90IGhhdmUgYSBjdXN0b21JZFxuICAgICAgaWYgKHN1YkNvbXBvbmVudC50eXBlID09PSBNZXNzYWdlQ29tcG9uZW50VHlwZXMuQnV0dG9uKSB7XG4gICAgICAgIGlmIChzdWJDb21wb25lbnQuc3R5bGUgPT09IEJ1dHRvblN0eWxlcy5MaW5rICYmIHN1YkNvbXBvbmVudC5jdXN0b21JZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxpbmsgYnV0dG9ucyBjYW4gbm90IGhhdmUgY3VzdG9tIGlkcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXIgYnV0dG9ucyBtdXN0IGhhdmUgYSBjdXN0b21JZFxuICAgICAgICBpZiAoXG4gICAgICAgICAgIXN1YkNvbXBvbmVudC5jdXN0b21JZCAmJiBzdWJDb21wb25lbnQuc3R5bGUgIT09IEJ1dHRvblN0eWxlcy5MaW5rXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiVGhlIGJ1dHRvbiByZXF1aXJlcyBhIGN1c3RvbSBpZCBpZiBpdCBpcyBub3QgYSBsaW5rIGJ1dHRvbi5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgoc3ViQ29tcG9uZW50LmxhYmVsLCB7IG1heDogODAgfSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFiZWwgY2FuIG5vdCBiZSBsb25nZXIgdGhhbiA4MCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YkNvbXBvbmVudC5lbW9qaSA9IG1ha2VFbW9qaUZyb21TdHJpbmcoc3ViQ29tcG9uZW50LmVtb2ppKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN1YkNvbXBvbmVudC50eXBlID09PSBNZXNzYWdlQ29tcG9uZW50VHlwZXMuU2VsZWN0TWVudSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc3ViQ29tcG9uZW50LnBsYWNlaG9sZGVyICYmXG4gICAgICAgICAgIWJvdC51dGlscy52YWxpZGF0ZUxlbmd0aChzdWJDb21wb25lbnQucGxhY2Vob2xkZXIsIHsgbWF4OiAxNTAgfSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJUaGUgY29tcG9uZW50IHBsYWNlaG9sZGVyIGNhbiBub3QgYmUgbG9uZ2VyIHRoYW4gMTUwIGNoYXJhY3RlcnMuXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWJDb21wb25lbnQubWluVmFsdWVzKSB7XG4gICAgICAgICAgaWYgKHN1YkNvbXBvbmVudC5taW5WYWx1ZXMgPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVGhlIG1pbiB2YWx1ZXMgbXVzdCBiZSBtb3JlIHRoYW4gMSBpbiBhIHNlbGVjdCBjb21wb25lbnQuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdWJDb21wb25lbnQubWluVmFsdWVzID4gMjUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgXCJUaGUgbWluIHZhbHVlcyBtdXN0IGJlIGxlc3MgdGhhbiAyNSBpbiBhIHNlbGVjdCBjb21wb25lbnQuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghc3ViQ29tcG9uZW50Lm1heFZhbHVlcykge1xuICAgICAgICAgICAgc3ViQ29tcG9uZW50Lm1heFZhbHVlcyA9IHN1YkNvbXBvbmVudC5taW5WYWx1ZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdWJDb21wb25lbnQubWluVmFsdWVzID4gc3ViQ29tcG9uZW50Lm1heFZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlRoZSBzZWxlY3QgY29tcG9uZW50IGNhbiBub3QgaGF2ZSBhIG1pbiB2YWx1ZXMgaGlnaGVyIHRoYW4gYSBtYXggdmFsdWVzLlwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ViQ29tcG9uZW50Lm1heFZhbHVlcykge1xuICAgICAgICAgIGlmIChzdWJDb21wb25lbnQubWF4VmFsdWVzIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlRoZSBtYXggdmFsdWVzIG11c3QgYmUgbW9yZSB0aGFuIDEgaW4gYSBzZWxlY3QgY29tcG9uZW50LlwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3ViQ29tcG9uZW50Lm1heFZhbHVlcyA+IDI1KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVGhlIG1heCB2YWx1ZXMgbXVzdCBiZSBsZXNzIHRoYW4gMjUgaW4gYSBzZWxlY3QgY29tcG9uZW50LlwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ViQ29tcG9uZW50Lm9wdGlvbnMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBuZWVkIGF0IGxlYXN0IDEgb3B0aW9uIGluIHRoZSBzZWxlY3QgY29tcG9uZW50LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWJDb21wb25lbnQub3B0aW9ucy5sZW5ndGggPiAyNSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiWW91IGNhbiBub3QgaGF2ZSBtb3JlIHRoYW4gMjUgb3B0aW9ucyBpbiB0aGUgc2VsZWN0IGNvbXBvbmVudC5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlZmF1bHRzID0gMDtcblxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBzdWJDb21wb25lbnQub3B0aW9ucykge1xuICAgICAgICAgIGlmIChvcHRpb24uZGVmYXVsdCkge1xuICAgICAgICAgICAgZGVmYXVsdHMrKztcbiAgICAgICAgICAgIGlmIChkZWZhdWx0cyA+IChzdWJDb21wb25lbnQubWF4VmFsdWVzIHx8IDI1KSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2hvc2UgdG9vIG1hbnkgZGVmYXVsdCBvcHRpb25zLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWJvdC51dGlscy52YWxpZGF0ZUxlbmd0aChvcHRpb24ubGFiZWwsIHsgbWF4OiAyNSB9KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlRoZSBzZWxlY3QgY29tcG9uZW50IGxhYmVsIGNhbiBub3QgZXhjZWVkIDI1IGNoYXJhY3RlcnMuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKG9wdGlvbi52YWx1ZSwgeyBtYXg6IDEwMCB9KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlRoZSBzZWxlY3QgY29tcG9uZW50IHZhbHVlIGNhbiBub3QgZXhjZWVkIDEwMCBjaGFyYWN0ZXJzLlwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvcHRpb24uZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgICFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgob3B0aW9uLmRlc2NyaXB0aW9uLCB7IG1heDogNTAgfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgXCJUaGUgc2VsZWN0IG9wdGlvbiBkZXNjcmlwdGlvbiBjYW4gbm90IGV4Y2VlZCA1MCBjaGFyYWN0ZXJzLlwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcHRpb24uZW1vamkgPSBtYWtlRW1vamlGcm9tU3RyaW5nKG9wdGlvbi5lbW9qaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUVtb2ppRnJvbVN0cmluZyhcbiAgZW1vamk/OlxuICAgIHwgc3RyaW5nXG4gICAgfCB7XG4gICAgICBpZD86IHN0cmluZyB8IGJpZ2ludCB8IHVuZGVmaW5lZDtcbiAgICAgIG5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICBhbmltYXRlZD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgfSxcbikge1xuICBpZiAoIWVtb2ppKSByZXR1cm47XG5cbiAgaWYgKHR5cGVvZiBlbW9qaSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZW1vamkuaWQgPyBCaWdJbnQoZW1vamkuaWQpIDogdW5kZWZpbmVkLFxuICAgICAgbmFtZTogZW1vamkubmFtZSxcbiAgICAgIGFuaW1hdGVkOiBlbW9qaS5hbmltYXRlZCxcbiAgICB9O1xuICB9XG5cbiAgLy8gQSBzbm93Zmxha2UgaWQgd2FzIHByb3ZpZGVkXG4gIGlmICgvXlswLTldKyQvLnRlc3QoZW1vamkpKSB7XG4gICAgZW1vamkgPSB7XG4gICAgICBpZDogQmlnSW50KGVtb2ppKSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIEEgdW5pY29kZSBlbW9qaSB3YXMgcHJvdmlkZWRcbiAgICBlbW9qaSA9IHtcbiAgICAgIG5hbWU6IGVtb2ppLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZW1vamkgYXMgRW1vamk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlNBQWMsWUFBWSxFQUE0QixxQkFBcUIsUUFBUSxZQUFZLENBQUM7QUFFaEcsT0FBTyxTQUFTLGtCQUFrQixDQUFDLEdBQVEsRUFBRSxVQUE2QixFQUFFO0lBQzFFLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU87SUFFaEMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLEFBQUM7SUFFekIsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLENBQUU7UUFDbEMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixrQ0FBa0M7UUFDbEMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRW5FLCtEQUErRDtRQUMvRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDekMsTUFBTSxJQUNMLFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFDaEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEdBQUssWUFBWSxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxVQUFVO1FBQUEsQ0FBQyxFQUNuRztZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNwRDtRQUVELEtBQUssTUFBTSxhQUFZLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBRTtZQUMvQyxJQUNFLGFBQVksQ0FBQyxRQUFRLElBQ3JCLENBQUMsR0FBRyxD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