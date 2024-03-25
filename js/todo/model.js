export default class Model {

	constructor() {
        this.tasks = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('tasks');
        if (data) {
            this.tasks = JSON.parse(data);
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

	addTask(text) {
        let id = 1

        if(this.tasks.length > 0) {
            id = this.tasks[this.tasks.length - 1]['id'] + 1
        }

		const newTask = {
            id,
			status: 'active',
			text,
		};

        this.tasks.push(newTask);
        this.saveToLocalStorage();

        return newTask
	}

	changeStatus(task) {
        task.status === 'active' ? task.status = 'done' : task.status = 'active'
        this.saveToLocalStorage();
	}

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        this.saveToLocalStorage();
    }

    findTask(id) {
        const task = this.tasks.find(task => task.id === parseInt(id))
        return task
    }
}

// tasks = ['Заверстать стартовый шаблон', 'Написать скрипт', 'Записать урок', '465465464'];
// tasks = [
//     {
//         status: 'active',
// 		text: 'Заверстать стартовый шаблон',
// 	},
// 	{},
// 	{},
// ];
