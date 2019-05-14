import DeleteBlockCommand from 'DeleteBlockCommand'

class DeleteBlockCommandHandler {
    constructor(command) {
        if (command instanceof DeleteBlockCommand) {

        } else {
            throw 'Bad instance command'
        }
    }
}
