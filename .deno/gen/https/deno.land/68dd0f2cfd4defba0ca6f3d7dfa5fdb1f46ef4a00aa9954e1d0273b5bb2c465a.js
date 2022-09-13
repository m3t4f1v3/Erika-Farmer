import { BitwisePermissionFlags } from "../types/shared.ts";
/** This function converts a bitwise string to permission strings */ export function calculatePermissions(permissionBits) {
    return Object.keys(BitwisePermissionFlags).filter((permission)=>{
        // Since Object.keys() not only returns the permission names but also the bit values we need to return false if it is a Number
        if (Number(permission)) return false;
        // Check if permissionBits has this permission
        return permissionBits & BigInt(BitwisePermissionFlags[permission]);
    });
}
/** This function converts an array of permissions into the bitwise string. */ export function calculateBits(permissions) {
    return permissions.reduce((bits, perm)=>{
        bits |= BigInt(BitwisePermissionFlags[perm]);
        return bits;
    }, 0n).toString();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaXR3aXNlUGVybWlzc2lvbkZsYWdzLCBQZXJtaXNzaW9uU3RyaW5ncyB9IGZyb20gXCIuLi90eXBlcy9zaGFyZWQudHNcIjtcblxuLyoqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgYSBiaXR3aXNlIHN0cmluZyB0byBwZXJtaXNzaW9uIHN0cmluZ3MgKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVQZXJtaXNzaW9ucyhwZXJtaXNzaW9uQml0czogYmlnaW50KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhCaXR3aXNlUGVybWlzc2lvbkZsYWdzKS5maWx0ZXIoKHBlcm1pc3Npb24pID0+IHtcbiAgICAvLyBTaW5jZSBPYmplY3Qua2V5cygpIG5vdCBvbmx5IHJldHVybnMgdGhlIHBlcm1pc3Npb24gbmFtZXMgYnV0IGFsc28gdGhlIGJpdCB2YWx1ZXMgd2UgbmVlZCB0byByZXR1cm4gZmFsc2UgaWYgaXQgaXMgYSBOdW1iZXJcbiAgICBpZiAoTnVtYmVyKHBlcm1pc3Npb24pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gQ2hlY2sgaWYgcGVybWlzc2lvbkJpdHMgaGFzIHRoaXMgcGVybWlzc2lvblxuICAgIHJldHVybiBwZXJtaXNzaW9uQml0cyAmIEJpZ0ludChCaXR3aXNlUGVybWlzc2lvbkZsYWdzW3Blcm1pc3Npb24gYXMgUGVybWlzc2lvblN0cmluZ3NdKTtcbiAgfSkgYXMgUGVybWlzc2lvblN0cmluZ3NbXTtcbn1cblxuLyoqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgYW4gYXJyYXkgb2YgcGVybWlzc2lvbnMgaW50byB0aGUgYml0d2lzZSBzdHJpbmcuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQml0cyhwZXJtaXNzaW9uczogUGVybWlzc2lvblN0cmluZ3NbXSkge1xuICByZXR1cm4gcGVybWlzc2lvbnNcbiAgICAucmVkdWNlKChiaXRzLCBwZXJtKSA9PiB7XG4gICAgICBiaXRzIHw9IEJpZ0ludChCaXR3aXNlUGVybWlzc2lvbkZsYWdzW3Blcm1dKTtcbiAgICAgIHJldHVybiBiaXRzO1xuICAgIH0sIDBuKVxuICAgIC50b1N0cmluZygpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJTQUFTLHNCQUFzQixRQUEyQixvQkFBb0IsQ0FBQztBQUUvRSxvRUFBb0UsQ0FDcEUsT0FBTyxTQUFTLG9CQUFvQixDQUFDLGNBQXNCLEVBQUU7SUFDM0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxHQUFLO1FBQ2hFLDhIQUE4SDtRQUM5SCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyQyw4Q0FBOEM7UUFDOUMsT0FBTyxjQUFjLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxDQUFDO0tBQ3pGLENBQUMsQ0FBd0I7Q0FDM0I7QUFFRCw4RUFBOEUsQ0FDOUUsT0FBTyxTQUFTLGFBQWEsQ0FBQyxXQUFnQyxFQUFFO0lBQzlELE9BQU8sV0FBVyxDQUNmLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUs7UUFDdEIsSUFBSSxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0tBQ2IsRUFBRSxFQUFFLENBQUMsQ0FDTCxRQUFRLEVBQUUsQ0FBQztDQUNmIn0=