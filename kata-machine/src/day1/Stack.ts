type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private tail?: Node<T>;
    private head?: Node<T>;

    constructor() {
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;
        if (!this.head){
            this.head = node;
            return;
        } else {
            
            node.prev = this.head;
            this.head = node;
        }
}
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0){
            const head = this.head;
            this.head = undefined;
            return head?.value;
        } else {
            const head = this.head as Node<T>;
            this.head = head.prev;

            //head.prev = undefined;
            return head.value;
        }

}
    peek(): T | undefined {
        if (this.head){
            return this.head.value;
        } else {
            return;
        }
}
}