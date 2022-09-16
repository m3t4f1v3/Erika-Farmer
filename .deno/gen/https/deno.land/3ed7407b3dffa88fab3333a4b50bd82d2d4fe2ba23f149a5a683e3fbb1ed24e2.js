export async function editChannelOverwrite(bot, channelId, overwrite) {
    await bot.rest.runMethod(bot.rest, "PUT", bot.constants.routes.CHANNEL_OVERWRITE(channelId, overwrite.id), {
        allow: overwrite.allow ? bot.utils.calculateBits(overwrite.allow) : "0",
        deny: overwrite.deny ? bot.utils.calculateBits(overwrite.deny) : "0",
        type: overwrite.type,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdENoYW5uZWxPdmVyd3JpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0Q2hhbm5lbE92ZXJ3cml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLENBQUMsS0FBSyxVQUFVLG9CQUFvQixDQUN4QyxHQUFRLEVBQ1IsU0FBaUIsRUFDakIsU0FBNEI7SUFFNUIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDdEIsR0FBRyxDQUFDLElBQUksRUFDUixLQUFLLEVBQ0wsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDL0Q7UUFDRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ3ZFLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7UUFDcEUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0tBQ3JCLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvdCB9IGZyb20gXCIuLi8uLi9ib3QudHNcIjtcbmltcG9ydCB7IE92ZXJ3cml0ZVR5cGVzLCBQZXJtaXNzaW9uU3RyaW5ncyB9IGZyb20gXCIuLi8uLi90eXBlcy9zaGFyZWQudHNcIjtcblxuLyoqIEVkaXQgdGhlIGNoYW5uZWwgcGVybWlzc2lvbiBvdmVyd3JpdGVzIGZvciBhIHVzZXIgb3Igcm9sZSBpbiB0aGlzIGNoYW5uZWwuIFJlcXVpcmVzIGBNQU5BR0VfUk9MRVNgIHBlcm1pc3Npb24uICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdENoYW5uZWxPdmVyd3JpdGUoXG4gIGJvdDogQm90LFxuICBjaGFubmVsSWQ6IGJpZ2ludCxcbiAgb3ZlcndyaXRlOiBPdmVyd3JpdGVSZWFkYWJsZSxcbikge1xuICBhd2FpdCBib3QucmVzdC5ydW5NZXRob2Q8dW5kZWZpbmVkPihcbiAgICBib3QucmVzdCxcbiAgICBcIlBVVFwiLFxuICAgIGJvdC5jb25zdGFudHMucm91dGVzLkNIQU5ORUxfT1ZFUldSSVRFKGNoYW5uZWxJZCwgb3ZlcndyaXRlLmlkKSxcbiAgICB7XG4gICAgICBhbGxvdzogb3ZlcndyaXRlLmFsbG93ID8gYm90LnV0aWxzLmNhbGN1bGF0ZUJpdHMob3ZlcndyaXRlLmFsbG93KSA6IFwiMFwiLFxuICAgICAgZGVueTogb3ZlcndyaXRlLmRlbnkgPyBib3QudXRpbHMuY2FsY3VsYXRlQml0cyhvdmVyd3JpdGUuZGVueSkgOiBcIjBcIixcbiAgICAgIHR5cGU6IG92ZXJ3cml0ZS50eXBlLFxuICAgIH0sXG4gICk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcndyaXRlUmVhZGFibGUge1xuICAvKiogUm9sZSBvciB1c2VyIGlkICovXG4gIGlkOiBiaWdpbnQ7XG4gIC8qKiBFaXRoZXIgMCAocm9sZSkgb3IgMSAobWVtYmVyKSAqL1xuICB0eXBlOiBPdmVyd3JpdGVUeXBlcztcbiAgLyoqIFBlcm1pc3Npb24gYml0IHNldCAqL1xuICBhbGxvdz86IFBlcm1pc3Npb25TdHJpbmdzW107XG4gIC8qKiBQZXJtaXNzaW9uIGJpdCBzZXQgKi9cbiAgZGVueT86IFBlcm1pc3Npb25TdHJpbmdzW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcndyaXRlIHtcbiAgLyoqIFJvbGUgb3IgdXNlciBpZCAqL1xuICBpZDogYmlnaW50O1xuICAvKiogRWl0aGVyIDAgKHJvbGUpIG9yIDEgKG1lbWJlcikgKi9cbiAgdHlwZTogT3ZlcndyaXRlVHlwZXM7XG4gIC8qKiBQZXJtaXNzaW9uIGJpdCBzZXQgKi9cbiAgYWxsb3c/OiBiaWdpbnQ7XG4gIC8qKiBQZXJtaXNzaW9uIGJpdCBzZXQgKi9cbiAgZGVueT86IGJpZ2ludDtcbn1cbiJdfQ==