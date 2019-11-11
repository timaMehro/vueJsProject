import moment from 'moment'

const PRIORITY_LOW = 'low'
const PRIORITY_MEDIUM = 'medium'
const PRIORITY_HIGH = 'high'

export const NEW_TASK = {
    id: -1,
    title: '',
    description: '',
    priority: null,
    due_date: null,
    resolved_date: null,
    created_by: null,
    assigned_to: null,
    project: null,
    images: []
}

export default [{
        id: 1,
        title: 'Design 9:16 TV Screens',
        description: 'description',
        priority: PRIORITY_MEDIUM,
        due_date: moment().format('YYYY-MM-DD'),
        resolved_date: null,
        created_by: 1,
        assigned_to: 1,
        project: 1,
        images: []
    }, {
        id: 2,
        title: 'Generic Myriad Slide',
        description: 'Lorem ipsum dolor sit amet, vim unum meis alterum ei, per ut sint cetero, eos eius pericula inciderint te. Nibh errem viris ex pro, ne vim paulo legere, ex vis oblique legimus ocurreret. Simul impetus comprehensam usu no, an decore tempor putant vim. Cu sint scripta vis.\n\nUt eos timeam persius scripserit, omnis nobis quaeque in nec. In sit noluisse disputationi, cu graeci alienum invidunt sea. Placerat disputando an ius, id eum iisque conclusionemque. Etiam percipit ex sed, doming constituto at cum. Mel in dicat eligendi, quas lucilius eos et.',
        priority: PRIORITY_LOW,
        due_date: moment().add(1, 'day').format('YYYY-MM-DD'),
        resolved_date: null,
        created_by: 1,
        assigned_to: 2,
        project: 1,
        images: []
    }, {
        id: 3,
        title: 'App Store Assets',
        description: 'Lorem ipsum dolor sit amet, vim unum meis alterum ei, per ut sint cetero, eos eius pericula inciderint te. Nibh errem viris ex pro, ne vim paulo legere, ex vis oblique legimus ocurreret. Simul impetus comprehensam usu no, an decore tempor putant vim. Cu sint scripta vis.\n\nUt eos timeam persius scripserit, omnis nobis quaeque in nec. In sit noluisse disputationi, cu graeci alienum invidunt sea. Placerat disputando an ius, id eum iisque conclusionemque. Etiam percipit ex sed, doming constituto at cum. Mel in dicat eligendi, quas lucilius eos et.',
        priority: PRIORITY_HIGH,
        due_date: moment().add(1, 'week').format('YYYY-MM-DD'),
        resolved_date: null,
        created_by: 1,
        assigned_to: 3,
        project: 1,
        images: []
    }, {
        id: 4,
        title: 'App Design',
        description: 'Lorem ipsum dolor sit amet, vim unum meis alterum ei, per ut sint cetero, eos eius pericula inciderint te. Nibh errem viris ex pro, ne vim paulo legere, ex vis oblique legimus ocurreret. Simul impetus comprehensam usu no, an decore tempor putant vim. Cu sint scripta vis.\n\nUt eos timeam persius scripserit, omnis nobis quaeque in nec. In sit noluisse disputationi, cu graeci alienum invidunt sea. Placerat disputando an ius, id eum iisque conclusionemque. Etiam percipit ex sed, doming constituto at cum. Mel in dicat eligendi, quas lucilius eos et.',
        priority: PRIORITY_MEDIUM,
        due_date: moment().subtract(7, 'day').format('YYYY-MM-DD'),
        resolved_date: '2018-12-12',
        created_by: 1,
        assigned_to: 4,
        project: 1,
        images: []
    }

]