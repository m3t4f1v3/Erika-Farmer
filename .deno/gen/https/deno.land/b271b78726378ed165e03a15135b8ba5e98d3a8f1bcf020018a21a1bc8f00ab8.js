import { ButtonStyles, MessageComponentTypes } from "../deps.ts";
export function validateComponents(bot, components) {
    if (!components?.length)
        return;
    let actionRowCounter = 0;
    for (const component of components) {
        actionRowCounter++;
        if (actionRowCounter > 5)
            throw new Error("Too many action rows.");
        if (component.components?.length > 5) {
            throw new Error("Too many components.");
        }
        else if (component.components?.length > 1 &&
            component.components.some((subComponent) => subComponent.type === MessageComponentTypes.SelectMenu)) {
            throw new Error("Select component must be alone.");
        }
        for (const subComponent of component.components) {
            if (subComponent.customId &&
                !bot.utils.validateLength(subComponent.customId, { max: 100 })) {
                throw new Error("The custom id in the component is too big.");
            }
            if (subComponent.type === MessageComponentTypes.Button) {
                if (subComponent.style === ButtonStyles.Link && subComponent.customId) {
                    throw new Error("Link buttons can not have custom ids.");
                }
                if (!subComponent.customId && subComponent.style !== ButtonStyles.Link) {
                    throw new Error("The button requires a custom id if it is not a link button.");
                }
                if (!bot.utils.validateLength(subComponent.label, { max: 80 })) {
                    throw new Error("The label can not be longer than 80 characters.");
                }
                subComponent.emoji = makeEmojiFromString(subComponent.emoji);
            }
            if (subComponent.type === MessageComponentTypes.SelectMenu) {
                if (subComponent.placeholder &&
                    !bot.utils.validateLength(subComponent.placeholder, { max: 150 })) {
                    throw new Error("The component placeholder can not be longer than 150 characters.");
                }
                if (subComponent.minValues) {
                    if (subComponent.minValues < 1) {
                        throw new Error("The min values must be more than 1 in a select component.");
                    }
                    if (subComponent.minValues > 25) {
                        throw new Error("The min values must be less than 25 in a select component.");
                    }
                    if (!subComponent.maxValues) {
                        subComponent.maxValues = subComponent.minValues;
                    }
                    if (subComponent.minValues > subComponent.maxValues) {
                        throw new Error("The select component can not have a min values higher than a max values.");
                    }
                }
                if (subComponent.maxValues) {
                    if (subComponent.maxValues < 1) {
                        throw new Error("The max values must be more than 1 in a select component.");
                    }
                    if (subComponent.maxValues > 25) {
                        throw new Error("The max values must be less than 25 in a select component.");
                    }
                }
                if (subComponent.options.length < 1) {
                    throw new Error("You need at least 1 option in the select component.");
                }
                if (subComponent.options.length > 25) {
                    throw new Error("You can not have more than 25 options in the select component.");
                }
                let defaults = 0;
                for (const option of subComponent.options) {
                    if (option.default) {
                        defaults++;
                        if (defaults > (subComponent.maxValues || 25)) {
                            throw new Error("You chose too many default options.");
                        }
                    }
                    if (!bot.utils.validateLength(option.label, { max: 25 })) {
                        throw new Error("The select component label can not exceed 25 characters.");
                    }
                    if (!bot.utils.validateLength(option.value, { max: 100 })) {
                        throw new Error("The select component value can not exceed 100 characters.");
                    }
                    if (option.description &&
                        !bot.utils.validateLength(option.description, { max: 50 })) {
                        throw new Error("The select option description can not exceed 50 characters.");
                    }
                    option.emoji = makeEmojiFromString(option.emoji);
                }
            }
        }
    }
}
function makeEmojiFromString(emoji) {
    if (!emoji)
        return;
    if (typeof emoji !== "string") {
        return {
            id: emoji.id ? BigInt(emoji.id) : undefined,
            name: emoji.name,
            animated: emoji.animated,
        };
    }
    if (/^[0-9]+$/.test(emoji)) {
        emoji = {
            id: BigInt(emoji),
        };
    }
    else {
        emoji = {
            name: emoji,
        };
    }
    return emoji;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFPLFlBQVksRUFBNEIscUJBQXFCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFaEcsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEdBQVEsRUFBRSxVQUE2QjtJQUN4RSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU07UUFBRSxPQUFPO0lBRWhDLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBRXpCLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxFQUFFO1FBQ2xDLGdCQUFnQixFQUFFLENBQUM7UUFFbkIsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBR25FLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN6QzthQUFNLElBQ0wsU0FBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQztZQUNoQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFDbkc7WUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxLQUFLLE1BQU0sWUFBWSxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDL0MsSUFDRSxZQUFZLENBQUMsUUFBUTtnQkFDckIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQzlEO2dCQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMs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Q3pCLENBQUM7S0FDSDtJQUdELElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMxQixLQUFLLEdBQUc7WUFDTixFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNsQixDQUFDO0tBQ0g7U0FBTTtRQUVMLEtBQUssR0FBRztZQUNOLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQztLQUNIO0lBRUQsT0FBTyxLQUFjLENBQUM7QUFDeEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdCwgQnV0dG9uU3R5bGVzLCBFbW9qaSwgTWVzc2FnZUNvbXBvbmVudHMsIE1lc3NhZ2VDb21wb25lbnRUeXBlcyB9IGZyb20gXCIuLi9kZXBzLnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNvbXBvbmVudHMoYm90OiBCb3QsIGNvbXBvbmVudHM6IE1lc3NhZ2VDb21wb25lbnRzKSB7XG4gIGlmICghY29tcG9uZW50cz8ubGVuZ3RoKSByZXR1cm47XG5cbiAgbGV0IGFjdGlvblJvd0NvdW50ZXIgPSAwO1xuXG4gIGZvciAoY29uc3QgY29tcG9uZW50IG9mIGNvbXBvbmVudHMpIHtcbiAgICBhY3Rpb25Sb3dDb3VudGVyKys7XG4gICAgLy8gTWF4IG9mIDUgQWN0aW9uUm93cyBwZXIgbWVzc2FnZVxuICAgIGlmIChhY3Rpb25Sb3dDb3VudGVyID4gNSkgdGhyb3cgbmV3IEVycm9yKFwiVG9vIG1hbnkgYWN0aW9uIHJvd3MuXCIpO1xuXG4gICAgLy8gTWF4IG9mIDUgQnV0dG9ucyAob3IgYW55IGNvbXBvbmVudCB0eXBlKSB3aXRoaW4gYW4gQWN0aW9uUm93XG4gICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRzPy5sZW5ndGggPiA1KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb28gbWFueSBjb21wb25lbnRzLlwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY29tcG9uZW50LmNvbXBvbmVudHM/Lmxlbmd0aCA+IDEgJiZcbiAgICAgIGNvbXBvbmVudC5jb21wb25lbnRzLnNvbWUoKHN1YkNvbXBvbmVudCkgPT4gc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5TZWxlY3RNZW51KVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VsZWN0IGNvbXBvbmVudCBtdXN0IGJlIGFsb25lLlwiKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHN1YkNvbXBvbmVudCBvZiBjb21wb25lbnQuY29tcG9uZW50cykge1xuICAgICAgaWYgKFxuICAgICAgICBzdWJDb21wb25lbnQuY3VzdG9tSWQgJiZcbiAgICAgICAgIWJvdC51dGlscy52YWxpZGF0ZUxlbmd0aChzdWJDb21wb25lbnQuY3VzdG9tSWQsIHsgbWF4OiAxMDAgfSlcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY3VzdG9tIGlkIGluIHRoZSBjb21wb25lbnQgaXMgdG9vIGJpZy5cIik7XG4gICAgICB9XG5cbiAgICAgIC8vIDUgTGluayBidXR0b25zIGNhbiBub3QgaGF2ZSBhIGN1c3RvbUlkXG4gICAgICBpZiAoc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5CdXR0b24pIHtcbiAgICAgICAgaWYgKHN1YkNvbXBvbmVudC5zdHlsZSA9PT0gQnV0dG9uU3R5bGVzLkxpbmsgJiYgc3ViQ29tcG9uZW50LmN1c3RvbUlkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGluayBidXR0b25zIGNhbiBub3QgaGF2ZSBjdXN0b20gaWRzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlciBidXR0b25zIG11c3QgaGF2ZSBhIGN1c3RvbUlkXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhc3ViQ29tcG9uZW50LmN1c3RvbUlkICYmIHN1YkNvbXBvbmVudC5zdHlsZSAhPT0gQnV0dG9uU3R5bGVzLkxpbmtcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJUaGUgYnV0dG9uIHJlcXVpcmVzIGEgY3VzdG9tIGlkIGlmIGl0IGlzIG5vdCBhIGxpbmsgYnV0dG9uLlwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWJvdC51dGlscy52YWxpZGF0ZUxlbmd0aChzdWJDb21wb25lbnQubGFiZWwsIHsgbWF4OiA4MCB9KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYWJlbCBjYW4gbm90IGJlIGxvbmdlciB0aGFuIDgwIGNoYXJhY3RlcnMuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ViQ29tcG9uZW50LmVtb2ppID0gbWFrZUVtb2ppRnJvbVN0cmluZyhzdWJDb21wb25lbnQuZW1vamkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3ViQ29tcG9uZW50LnR5cGUgPT09IE1lc3NhZ2VDb21wb25lbnRUeXBlcy5TZWxlY3RNZW51KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzdWJDb21wb25lbnQucGxhY2Vob2xkZXIgJiZcbiAgICAgICAgICAhYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKHN1YkNvbXBvbmVudC5wbGFjZWhvbGRlciwgeyBtYXg6IDE1MCB9KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIlRoZSBjb21wb25lbnQgcGxhY2Vob2xkZXIgY2FuIG5vdCBiZSBsb25nZXIgdGhhbiAxNTAgY2hhcmFjdGVycy5cIixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1YkNvbXBvbmVudC5taW5WYWx1ZXMpIHtcbiAgICAgICAgICBpZiAoc3ViQ29tcG9uZW50Lm1pblZhbHVlcyA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgXCJUaGUgbWluIHZhbHVlcyBtdXN0IGJlIG1vcmUgdGhhbiAxIGluIGEgc2VsZWN0IGNvbXBvbmVudC5cIixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN1YkNvbXBvbmVudC5taW5WYWx1ZXMgPiAyNSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlRoZSBtaW4gdmFsdWVzIG11c3QgYmUgbGVzcyB0aGFuIDI1IGluIGEgc2VsZWN0IGNvbXBvbmVudC5cIixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFzdWJDb21wb25lbnQubWF4VmFsdWVzKSB7XG4gICAgICAgICAgICBzdWJDb21wb25lbnQubWF4VmFsdWVzID0gc3ViQ29tcG9uZW50Lm1pblZhbHVlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN1YkNvbXBvbmVudC5taW5WYWx1ZXMgPiBzdWJDb21wb25lbnQubWF4VmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVGhlIHNlbGVjdCBjb21wb25lbnQgY2FuIG5vdCBoYXZlIGEgbWluIHZhbHVlcyBoaWdoZXIgdGhhbiBhIG1heCB2YWx1ZXMuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWJDb21wb25lbnQubWF4VmFsdWVzKSB7XG4gICAgICAgICAgaWYgKHN1YkNvbXBvbmVudC5tYXhWYWx1ZXMgPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVGhlIG1heCB2YWx1ZXMgbXVzdCBiZSBtb3JlIHRoYW4gMSBpbiBhIHNlbGVjdCBjb21wb25lbnQuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdWJDb21wb25lbnQubWF4VmFsdWVzID4gMjUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgXCJUaGUgbWF4IHZhbHVlcyBtdXN0IGJlIGxlc3MgdGhhbiAyNSBpbiBhIHNlbGVjdCBjb21wb25lbnQuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdWJDb21wb25lbnQub3B0aW9ucy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG5lZWQgYXQgbGVhc3QgMSBvcHRpb24gaW4gdGhlIHNlbGVjdCBjb21wb25lbnQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1YkNvbXBvbmVudC5vcHRpb25zLmxlbmd0aCA+IDI1KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJZb3UgY2FuIG5vdCBoYXZlIG1vcmUgdGhhbiAyNSBvcHRpb25zIGluIHRoZSBzZWxlY3QgY29tcG9uZW50LlwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVmYXVsdHMgPSAwO1xuXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIHN1YkNvbXBvbmVudC5vcHRpb25zKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbi5kZWZhdWx0KSB7XG4gICAgICAgICAgICBkZWZhdWx0cysrO1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRzID4gKHN1YkNvbXBvbmVudC5tYXhWYWx1ZXMgfHwgMjUpKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjaG9zZSB0b28gbWFueSBkZWZhdWx0IG9wdGlvbnMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghYm90LnV0aWxzLnZhbGlkYXRlTGVuZ3RoKG9wdGlvbi5sYWJlbCwgeyBtYXg6IDI1IH0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVGhlIHNlbGVjdCBjb21wb25lbnQgbGFiZWwgY2FuIG5vdCBleGNlZWQgMjUgY2hhcmFjdGVycy5cIixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFib3QudXRpbHMudmFsaWRhdGVMZW5ndGgob3B0aW9uLnZhbHVlLCB7IG1heDogMTAwIH0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVGhlIHNlbGVjdCBjb21wb25lbnQgdmFsdWUgY2FuIG5vdCBleGNlZWQgMTAwIGNoYXJhY3RlcnMuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG9wdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgICAgIWJvdC51dGlscy52YWxpZGF0ZUxlbmd0aChvcHRpb24uZGVzY3JpcHRpb24sIHsgbWF4OiA1MCB9KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlRoZSBzZWxlY3Qgb3B0aW9uIGRlc2NyaXB0aW9uIGNhbiBub3QgZXhjZWVkIDUwIGNoYXJhY3RlcnMuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdGlvbi5lbW9qaSA9IG1ha2VFbW9qaUZyb21TdHJpbmcob3B0aW9uLmVtb2ppKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlRW1vamlGcm9tU3RyaW5nKFxuICBlbW9qaT86XG4gICAgfCBzdHJpbmdcbiAgICB8IHtcbiAgICAgIGlkPzogc3RyaW5nIHwgYmlnaW50IHwgdW5kZWZpbmVkO1xuICAgICAgbmFtZT86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGFuaW1hdGVkPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICB9LFxuKSB7XG4gIGlmICghZW1vamkpIHJldHVybjtcblxuICBpZiAodHlwZW9mIGVtb2ppICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlbW9qaS5pZCA/IEJpZ0ludChlbW9qaS5pZCkgOiB1bmRlZmluZWQsXG4gICAgICBuYW1lOiBlbW9qaS5uYW1lLFxuICAgICAgYW5pbWF0ZWQ6IGVtb2ppLmFuaW1hdGVkLFxuICAgIH07XG4gIH1cblxuICAvLyBBIHNub3dmbGFrZSBpZCB3YXMgcHJvdmlkZWRcbiAgaWYgKC9eWzAtOV0rJC8udGVzdChlbW9qaSkpIHtcbiAgICBlbW9qaSA9IHtcbiAgICAgIGlkOiBCaWdJbnQoZW1vamkpLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gQSB1bmljb2RlIGVtb2ppIHdhcyBwcm92aWRlZFxuICAgIGVtb2ppID0ge1xuICAgICAgbmFtZTogZW1vamksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBlbW9qaSBhcyBFbW9qaTtcbn1cbiJdfQ==