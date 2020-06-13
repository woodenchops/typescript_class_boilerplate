interface buttonProps {
    button: string;
    isTrue?: boolean;
};

class Button {
    buttonEl: HTMLButtonElement;
    isTrue?: boolean;

    constructor(buttonProps: buttonProps) {
        this.buttonEl = document.getElementById(buttonProps.button)! as HTMLButtonElement;
        this.isTrue = buttonProps.isTrue;
        this.buttonHandler();
    }

    buttonHandler(): void {
        this.buttonEl.addEventListener('click', (event: Event) => {
            this.buttonEl.style.backgroundColor = '#2c2c38';
            console.log(event.target);
        });
    }

    concatNumbers(a: number, b: number): number {
        return a + b;
    }
}

const btn = new Button({
    button: 'btn',
    isTrue: true
});

console.log(btn.concatNumbers(10, 20));