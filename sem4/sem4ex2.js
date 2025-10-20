class Software {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

class Browser extends Software {
    constructor(name) {
        super(name);
        this.plugins = [];
    }

    addPlugin(plugin) {
        this.plugins.push(plugin);
    }

    installed() {
        console.log("Plugins:");
        for (const plugin of this.plugins) {
            plugin.install();
        }
    }
}

class BrowserPlugin {
    constructor(name) {
        this.name = name;
    }

    install() {
        console.log(`${this.name} installed`);
    }
}

const p1 = new BrowserPlugin("Teleparty");
const b1 = new Browser("Chrome");
b1.addPlugin(p1);
b1.installed();