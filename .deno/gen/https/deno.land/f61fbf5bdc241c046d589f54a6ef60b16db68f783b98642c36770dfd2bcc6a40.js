export class ToggleBitfield {
    bitfield = 0;
    constructor(bitfield){
        if (bitfield) this.bitfield = bitfield;
    }
    /** Tests whether or not this bitfield has the permission requested. */ contains(bits) {
        return Boolean(this.bitfield & bits);
    }
    /** Adds some bits to the bitfield. */ add(bits) {
        this.bitfield |= bits;
        return this;
    }
    /** Removes some bits from the bitfield. */ remove(bits) {
        this.bitfield &= ~bits;
        return this;
    }
}
export class ToggleBitfieldBigint {
    bitfield = 0n;
    constructor(bitfield){
        if (bitfield) this.bitfield = bitfield;
    }
    /** Tests whether or not this bitfield has the permission requested. */ contains(bits) {
        return Boolean(this.bitfield & bits);
    }
    /** Adds some bits to the bitfield. */ add(bits) {
        this.bitfield |= bits;
        return this;
    }
    /** Removes some bits from the bitfield. */ remove(bits) {
        this.bitfield &= ~bits;
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9nZ2xlQml0ZmllbGQge1xuICBiaXRmaWVsZCA9IDA7XG5cbiAgY29uc3RydWN0b3IoYml0ZmllbGQ/OiBudW1iZXIpIHtcbiAgICBpZiAoYml0ZmllbGQpIHRoaXMuYml0ZmllbGQgPSBiaXRmaWVsZDtcbiAgfVxuXG4gIC8qKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGlzIGJpdGZpZWxkIGhhcyB0aGUgcGVybWlzc2lvbiByZXF1ZXN0ZWQuICovXG4gIGNvbnRhaW5zKGJpdHM6IG51bWJlcikge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuYml0ZmllbGQgJiBiaXRzKTtcbiAgfVxuXG4gIC8qKiBBZGRzIHNvbWUgYml0cyB0byB0aGUgYml0ZmllbGQuICovXG4gIGFkZChiaXRzOiBudW1iZXIpIHtcbiAgICB0aGlzLmJpdGZpZWxkIHw9IGJpdHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBzb21lIGJpdHMgZnJvbSB0aGUgYml0ZmllbGQuICovXG4gIHJlbW92ZShiaXRzOiBudW1iZXIpIHtcbiAgICB0aGlzLmJpdGZpZWxkICY9IH5iaXRzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVCaXRmaWVsZEJpZ2ludCB7XG4gIGJpdGZpZWxkID0gMG47XG5cbiAgY29uc3RydWN0b3IoYml0ZmllbGQ/OiBiaWdpbnQpIHtcbiAgICBpZiAoYml0ZmllbGQpIHRoaXMuYml0ZmllbGQgPSBiaXRmaWVsZDtcbiAgfVxuXG4gIC8qKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGlzIGJpdGZpZWxkIGhhcyB0aGUgcGVybWlzc2lvbiByZXF1ZXN0ZWQuICovXG4gIGNvbnRhaW5zKGJpdHM6IGJpZ2ludCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuYml0ZmllbGQgJiBiaXRzKTtcbiAgfVxuXG4gIC8qKiBBZGRzIHNvbWUgYml0cyB0byB0aGUgYml0ZmllbGQuICovXG4gIGFkZChiaXRzOiBiaWdpbnQpIHtcbiAgICB0aGlzLmJpdGZpZWxkIHw9IGJpdHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBzb21lIGJpdHMgZnJvbSB0aGUgYml0ZmllbGQuICovXG4gIHJlbW92ZShiaXRzOiBiaWdpbnQpIHtcbiAgICB0aGlzLmJpdGZpZWxkICY9IH5iaXRzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sTUFBTSxjQUFjO0lBQ3pCLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFYixZQUFZLFFBQWlCLENBQUU7UUFDN0IsSUFBSSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDeEM7SUFFRCx1RUFBdUUsQ0FDdkUsUUFBUSxDQUFDLElBQVksRUFBRTtRQUNyQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsc0NBQXNDLENBQ3RDLEdBQUcsQ0FBQyxJQUFZLEVBQUU7UUFDaEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELDJDQUEyQyxDQUMzQyxNQUFNLENBQUMsSUFBWSxFQUFFO1FBQ25CLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7S0FDYjtDQUNGO0FBRUQsT0FBTyxNQUFNLG9CQUFvQjtJQUMvQixRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWQsWUFBWSxRQUFpQixDQUFFO1FBQzdCLElBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQ3hDO0lBRUQsdUVBQXVFLENBQ3ZFLFFBQVEsQ0FBQyxJQUFZLEVBQUU7UUFDckIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN0QztJQUVELHNDQUFzQyxDQUN0QyxHQUFHLENBQUMsSUFBWSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCwyQ0FBMkMsQ0FDM0MsTUFBTSxDQUFDLElBQVksRUFBRTtRQUNuQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Q0FDRiJ9