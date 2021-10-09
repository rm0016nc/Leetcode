class Tree {
    constructor() {
        this.root = null;
    }

    // Insert
    insert(val) {
        if (val == null) return null;

        if (this.root == null) {
            const root = new Node(val);
            this.root = root;
            return root;
        }

        const searchTree = (node) => {
            if (val < node.value) {
                if (node.left == null) {
                    node.left = new Node(val);
                } else {
                    searchTree(node.left);
                }
            } else {
                if (node.right == null) {
                    node.right = new Node(val);
                } else {
                    searchTree(node.right);
                }
            }
        }
        return searchTree(this.root);
    }

    treeFromArray(arr) {
        if (arr.length == 0) return null;

        const recursion = (inputArr, start, end) => {
            if (start > end) return null;

            const mid = Math.floor((start + end) / 2);

            const root = new Node(arr[mid]);

            root.left = recursion(root.left, start, mid - 1);


            root.right = recursion(root.right, mid + 1, end);

            return root;
        }

        return recursion(arr, 0, arr.length - 1);
    }

    getHeight() {
        const root = this.root;

        const height = (node) => {
            if (node == null) return 0;

            let left = height(node.left);
            // console.log(left)

            let right = height(node.right);
            //console.log(right)
            //console.log(left, right, Math.max(left, right) + 1)

            return Math.max(left, right) + 1;
        }
        return height(this.root)
    }

    isBalanced() {
        const root = this.root;
        let isBalance = true;

        const height = (node) => {
            if (node == null) return 0;

            let left = height(node.left);
            let right = height(node.right);

            if (Math.abs(left - right) > 1) {
                return false;
            } else {
                return Math.max(left, right) + 1;
            }
        }
            ; height(root);
        return isBalance
    }

    print2() {
        const root = this.treeFromArray([0, 1, 2, 3, 4, 5, 6]);
        let leftOut = "";
        let rightOut = "";

        let leftNodes = root;
        let rightNodes = root;

        while (leftNodes) {
            leftOut = `${leftOut} ${leftNodes.value} ==) `;
            leftNodes = leftNodes.left;
        }

        while (rightNodes) {
            rightOut = `${rightOut} ${rightNodes.value} ==) `;
            rightNodes = rightNodes.right;
        }
        console.log(`Left nodes: ${leftOut} null`);
        console.log(`Right nodes ${rightOut} null`);
    }

    print() {
        let leftOut = "";
        let rightOut = "";

        let leftNodes = this.root;
        let rightNodes = this.root;

        while (leftNodes) {
            leftOut = `${leftOut} ${leftNodes.value} ==) `;
            leftNodes = leftNodes.left;
        }

        while (rightNodes) {
            rightOut = `${rightOut} ${rightNodes.value} ==) `;
            rightNodes = rightNodes.right;
        }
        console.log(`Left nodes: ${leftOut} null`);
        console.log(`Right nodes ${rightOut} null`);
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
