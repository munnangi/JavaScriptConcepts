class Validator {
    constructor() {
        this.message = 'is invalid'
    }

    setInvalidMessage(field) {
        return `${field} ${this.message}`
    }

    setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage)
    }
}

const validator = new Validator()
validator.setInvalidMessages('city')
// TypeError: Cannot read property 'message' of undefined


// to fix the issue bind to state your context explicitly

class Validator {
    constructor() {
        this.message = 'is invalid'
    }

    setInvalidMessage(field) {
        return `${field} ${this.message}`
    }

    setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage.bind(this))
    }
}

const validator = new Validator()
validator.setInvalidMessages('city')

// if you dont want to repeat the bind for all the function every time

class Validator {
    constructor() {
        this.message = 'is invalid'
        this.setInvalidMessage = this.setInvalidMessage.bind(this)
    }

    setInvalidMessage(field) {
        return `${field} ${this.message}`
    }

    setInvalidMessages(...fields) {
        return fields.map(this.setInvalidMessage)
    }
}

const validator = new Validator()
validator.setInvalidMessages('city')