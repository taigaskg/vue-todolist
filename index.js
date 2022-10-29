var app = new Vue({
  el: '#app',
  data:{
    newTask: '',
    todoList: [],
  },
  methods:{
    addNewTask(){
      if(this.newTask == '') return;

      this.todoList.push({
        task: this.newTask,
        isDone: false
      });
      this.newTask = '';
//
    },
    deleteTask(index){
      this.todoList.splice(index,1);
    }
  },
  computed: {
    remains: function(){
      var count = 0;
      var todoLength = this.todoList.length;
      for(var i = 0; i<todoLength; i++){
        if(!this.todoList[i].isDone){
          count++;
        }
      }
      return count;
    }
  }
})
