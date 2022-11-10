/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 == null || l2 == null) {
        return null;
    }

    const output: number[] = [];
    
    let carry = 0;
    
    const sum = l1.val + l2.val;
    
    carry = Math.floor(sum / 10);
    let remainder = sum % 10;
    
    output.push(remainder);
    
    let node1 = l1.next;
    let node2 = l2.next;
    
    while (node1 || node2 || carry) {
        const val1 = node1?.val || 0;
        const val2 = node2?.val || 0;
        
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        remainder = sum % 10;

        output.push(remainder);
        
        if (node1) {
            node1 = node1.next;
        }
        if (node2) {
            node2 = node2.next;
        }
    }
    
    const outputNode = new ListNode(output[0], null);
    let lastNode = outputNode;
    
    
    for (let i = 1; i < output.length; i++) {
        const node = new ListNode(output[i]);
        lastNode.next = node;
        lastNode = node;
    }
    
    return outputNode;
};
