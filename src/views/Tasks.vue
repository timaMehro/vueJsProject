<template>
  <div class="tasks">
    <page-header title="My Tasks" />
    <div class="container">
      <div class="navs">
        <tabs :tabs="tabs" v-model="activeTab" />
        <add-task-button />
      </div>

      <div class="task-lists">
        <div>
          <span>
            <h2>To do</h2>
          </span> 
          <draggable  class="checkHeigh" v-model="selected.tags" :options="getOptions(selected)" :move="onMove" @start="isDragging=true" @end="isDragging=false">    
              <task-item
                v-for="task in selected.tags"
                :key="task.id"
                :task="task"
              />
          </draggable>
        </div>
        <div>
          <span>
            <h2>completed</h2>
          </span>
          <draggable  class="checkHeigh"  v-model="available.tags" :options="getOptions(available)" :move="onMove" @start="isDragging=true" @end="isDragging=false">
              <task-item
                v-for="task in available.tags"
                :key="task.id"
                :task="task"
              />
          </draggable>
       </div>

      </div>  
    </div>

    <modal-transition>
      <router-view />
    </modal-transition>
  </div>
</template>

<script>
import { mapState, mapActions,mapGetters } from 'vuex'
import PageHeader from '../components/PageHeader'
import Tabs from '../components/Tabs'
import AddTaskButton from '../components/AddTaskButton'
import TaskItem from '../components/TaskItem'
import ModalTransition from '../components/ModalTransition'
import moment from 'moment'
import draggable from 'vuedraggable'

const TAB_ALL = 'All'
const TAB_TODAY = 'Today'
const TAB_WEEK = 'This week'
const TAB_MONTH = 'This month'

export default {
  name: 'vue-draggable-tags',
  data () {
    return {
      isComplete:'',
      id : 0,
      activeTab: TAB_ALL,
      tasksFiltread: [],
      today: moment(new Date()).format('YYYY-MM-DD'),
      thisWeek: moment().startOf('isoWeek').format('YYYY-MM-DD'),
      ThisMonth: moment().startOf('Month').format('YYYY-MM-DD'),
      selected: {
        tags: [],
        editable: true,
        cloneable: false,
        droppable: true
      },
      available: {
         tags: [],
        editable: true,
        cloneable: false,
        droppable: true,
      },
      isDragging: false,
      delayedDragging:false
    }
  },
  computed: {
    ...mapState('tasks', [
      'tasks'
    ]),
     ...mapGetters('tasks', [
      'getTaskById'
    ]),
    completeTasks () { 
      this.available.tags = this.tasksFiltread.filter(t => t.resolved_date )
      return this.tasksFiltread.filter(t => t.resolved_date )
    },
    uncompleteTasks () { 
      this.setTheDate();
      this.selected.tags= this.tasksFiltread.filter(t => !t.resolved_date )   
      return this.tasksFiltread.filter(t => !t.resolved_date )
    }
  },
  methods: {
    ...mapActions('tasks', [
      'fetchProjects',
      'fetchTasks',
      'fetchUsers',
      'saveTask'
    ]),
    async fetchData () {
      await Promise.all([
        this.fetchProjects(),
        this.fetchTasks(),
        this.fetchUsers()
      ])
    },
    setTheDate() {
     switch(this.activeTab) { 
      case 'Today':
        this.tasksFiltread = this.tasks.filter(t => t.due_date === this.today )
        break
      case 'This week':
        this.tasksFiltread = this.tasks.filter(t => t.due_date <= this.today && t.due_date >= this.thisWeek)
        break
      case 'This month':
        this.tasksFiltread = this.tasks.filter(t =>  t.due_date <= this.today && t.due_date >= this.ThisMonth)
        break
      default:
        this.tasksFiltread = this.tasks
        break
     } 
    },
    getOptions(place) {
      return  {
        animation: 1,
        group:{
          name:'tags',
          pull: place.cloneable ? 'clone' : true,
          put:  place.droppable
        },
        disabled: !place.editable,
        ghostClass: 'ghost'
      };
    },
   async onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElementId = draggedContext.element.id
      const draggedElement = draggedContext.element;
      this.id = draggedElementId 
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
     
    },
    saveTaskStatus() {
    let task =  this.getTaskById(this.id)
    this.isComplete = task.resolved_date
      this.saveTask({
        id: this.id,
        resolved_date: (this.isComplete ? null : this.today)
      })
    },
  },
  created () {
    this.myComputed = this.computedData;
    this.tabs = [TAB_ALL, TAB_TODAY, TAB_WEEK, TAB_MONTH]
    if (this.tasks.length === 0) {
      this.fetchData()
    }
  },
  components: {
    PageHeader,
    Tabs,
    AddTaskButton,
    TaskItem,
    ModalTransition,
    draggable
  },
  watch: {
    uncompleteTasks (val) {
     },
     completeTasks (val) {
     },
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
           this.saveTaskStatus()
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 80px 30px;
  width: 1340px;
  max-width: 100%;
  box-sizing: border-box;
}


.navs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}
.task-list {
    min-height: 100vh;
}
.checkHeigh{ min-height: 50vh}
.draggable {background-color: rebeccapurple}
.task-lists {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > * {
    width: 49%;
  }
}
</style>
