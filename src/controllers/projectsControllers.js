import Project from '../models/projectsModel';
import Task from '../models/tasksModel';

//Получить список всех проектов
export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll({
            atributes: ['id', 'name', 'priority', 'description', 'deliverydate']
        });
        res.json({
            data: projects
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Что-то пошло не так. Попробуйте еще раз.'
        });
    }
};

//Создать проект
export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
                fields: ['name', 'priority', 'description', 'deliverydate']
            });
        if (newProject) {
            return res.json({
                message: 'Создан новый проект',
                data: newProject
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Что-то пошло не так. Попробуйте еще раз.',
            data: {},
        })
    }
    res.json('received');
};

//Получить информацию об одном проекте
export async function getOneProject(req, res) {
    const { id } = req.params;
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        })
        res.json(project);
    } catch (error) {
        console.log(error);
    }
}

//Обновить информацию о проекте
export async function updateProject(req, res) {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;
    try {
        const projects = await Project.findAll({
            atributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id
            }
        });
        if (projects.length > 0) {
            projects.forEach(async (project) => {
                await project.update({
                    // name: name ? name : project.name,
                    name,
                    priority,
                    description,
                    deliverydate
                });
            });
            return res.json({
                message: 'Проект обновлен',
                data: projects
            })
        }
    } catch (e) {
        res.json({
            message: 'Cannot update this Project.',
            data: {}
        })
    }
};

//Удалить проект
export async function deleteProject(req, res) {
    const { id } = req.params;
    try {
        await Task.destroy({
            where: {
                projectid: id
            }
        });
        const deleteRowsCount = await Project.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Проект удален',
            count: deleteRowsCount
        })
    } catch (error) {
        res.json({
            message: 'Ошибка удаления.',
            data: {}
        });
    }
};