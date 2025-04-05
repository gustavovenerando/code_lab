import { IThemeFactory } from "./interface";

/*
Used when need to create a family of concrete objects

Example: Concreate factory has 2 creation methods: createComponentA and createComponentB.
Component A and B needs to be created in the same "family", together.
When creating components to different OS, they have distinc behaviours.
In this case, we may correlate instances of Alert component with Button component to windonws.
We dont want to create a Alert compomponent to windows and a Button component to macOs.
They correlate in the same "family", in this context the same OS.
*/

/*
Example
Page with dark and light themes
*/


class DarkThemeFactory implements IThemeFactory {
    createButton(): string {
        return 'Dark Themed Button';
    }

    createCheckbox(): string {
        return 'Dark Themed Checkbox';
    }
}

class LightThemeFactory implements IThemeFactory {
    createButton(): string {
        return 'Light Themed Button';
    }

    createCheckbox(): string {
        return 'Light Themed Checkbox';
    }
}


class Page {
    public components: string[];

    constructor() { 
        this.components = [];
    }

    makeUi(factory: IThemeFactory){
        const button = factory.createButton();
        const checkbox = factory.createCheckbox();
        this.components = [button, checkbox];
    }
}

const darkFac = new DarkThemeFactory();
const lightFac = new LightThemeFactory();

const page = new Page();
page.makeUi(darkFac);
// page.makeUi(lightFac);

console.log(page.components);
