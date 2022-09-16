export class ToggleBitfield {
    bitfield = 0;
    constructor(bitfield) {
        if (bitfield)
            this.bitfield = bitfield;
    }
    contains(bits) {
        return Boolean(this.bitfield & bits);
    }
    add(bits) {
        this.bitfield |= bits;
        return this;
    }
    remove(bits) {
        this.bitfield &= ~bits;
        return this;
    }
}
export class ToggleBitfieldBigint {
    bitfield = 0n;
    constructor(bitfield) {
        if (bitfield)
            this.bitfield = bitfield;
    }
    contains(bits) {
        return Boolean(this.bitfield & bits);
    }
    add(bits) {
        this.bitfield |= bits;
        return this;
    }
    remove(bits) {
        this.bitfield &= ~bits;
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlQml0ZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb2dnbGVCaXRmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sY0FBYztJQUN6QixRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRWIsWUFBWSxRQUFpQjtRQUMzQixJQUFJLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBR0QsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR0QsR0FBRyxDQUFDLElBQVk7UUFDZCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWQsWUFBWSxRQUFpQjtRQUMzQixJQUFJLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBR0QsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR0QsR0FBRyxDQUFDLElBQVk7UUFDZCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvZ2dsZUJpdGZpZWxkIHtcbiAgYml0ZmllbGQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGJpdGZpZWxkPzogbnVtYmVyKSB7XG4gICAgaWYgKGJpdGZpZWxkKSB0aGlzLmJpdGZpZWxkID0gYml0ZmllbGQ7XG4gIH1cblxuICAvKiogVGVzdHMgd2hldGhlciBvciBub3QgdGhpcyBiaXRmaWVsZCBoYXMgdGhlIHBlcm1pc3Npb24gcmVxdWVzdGVkLiAqL1xuICBjb250YWlucyhiaXRzOiBudW1iZXIpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmJpdGZpZWxkICYgYml0cyk7XG4gIH1cblxuICAvKiogQWRkcyBzb21lIGJpdHMgdG8gdGhlIGJpdGZpZWxkLiAqL1xuICBhZGQoYml0czogbnVtYmVyKSB7XG4gICAgdGhpcy5iaXRmaWVsZCB8PSBiaXRzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgc29tZSBiaXRzIGZyb20gdGhlIGJpdGZpZWxkLiAqL1xuICByZW1vdmUoYml0czogbnVtYmVyKSB7XG4gICAgdGhpcy5iaXRmaWVsZCAmPSB+Yml0cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9nZ2xlQml0ZmllbGRCaWdpbnQge1xuICBiaXRmaWVsZCA9IDBuO1xuXG4gIGNvbnN0cnVjdG9yKGJpdGZpZWxkPzogYmlnaW50KSB7XG4gICAgaWYgKGJpdGZpZWxkKSB0aGlzLmJpdGZpZWxkID0gYml0ZmllbGQ7XG4gIH1cblxuICAvKiogVGVzdHMgd2hldGhlciBvciBub3QgdGhpcyBiaXRmaWVsZCBoYXMgdGhlIHBlcm1pc3Npb24gcmVxdWVzdGVkLiAqL1xuICBjb250YWlucyhiaXRzOiBiaWdpbnQpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmJpdGZpZWxkICYgYml0cyk7XG4gIH1cblxuICAvKiogQWRkcyBzb21lIGJpdHMgdG8gdGhlIGJpdGZpZWxkLiAqL1xuICBhZGQoYml0czogYmlnaW50KSB7XG4gICAgdGhpcy5iaXRmaWVsZCB8PSBiaXRzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgc29tZSBiaXRzIGZyb20gdGhlIGJpdGZpZWxkLiAqL1xuICByZW1vdmUoYml0czogYmlnaW50KSB7XG4gICAgdGhpcy5iaXRmaWVsZCAmPSB+Yml0cztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19