import setupBanPermChecks from "./ban.ts";
import editBotNickname from "./editBot.ts";
import editMember from "./editMember.ts";
import kickMember from "./kickMember.ts";
import pruneMembers from "./pruneMembers.ts";
export default function setupMemberPermChecks(bot) {
    setupBanPermChecks(bot);
    editBotNickname(bot);
    editMember(bot);
    kickMember(bot);
    pruneMembers(bot);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGVwcy50c1wiO1xuaW1wb3J0IHNldHVwQmFuUGVybUNoZWNrcyBmcm9tIFwiLi9iYW4udHNcIjtcbmltcG9ydCBlZGl0Qm90Tmlja25hbWUgZnJvbSBcIi4vZWRpdEJvdC50c1wiO1xuaW1wb3J0IGVkaXRNZW1iZXIgZnJvbSBcIi4vZWRpdE1lbWJlci50c1wiO1xuaW1wb3J0IGtpY2tNZW1iZXIgZnJvbSBcIi4va2lja01lbWJlci50c1wiO1xuaW1wb3J0IHBydW5lTWVtYmVycyBmcm9tIFwiLi9wcnVuZU1lbWJlcnMudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBNZW1iZXJQZXJtQ2hlY2tzKGJvdDogQm90V2l0aENhY2hlKSB7XG4gIHNldHVwQmFuUGVybUNoZWNrcyhib3QpO1xuICBlZGl0Qm90Tmlja25hbWUoYm90KTtcbiAgZWRpdE1lbWJlcihib3QpO1xuICBraWNrTWVtYmVyKGJvdCk7XG4gIHBydW5lTWVtYmVycyhib3QpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sa0JBQWtCLE1BQU0sVUFBVSxDQUFDO0FBQzFDLE9BQU8sZUFBZSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLFVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLFlBQVksTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxlQUFlLFNBQVMscUJBQXFCLENBQUMsR0FBaUIsRUFBRTtJQUMvRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQixZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDbkIsQ0FBQSJ9