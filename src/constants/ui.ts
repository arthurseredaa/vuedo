import {ref} from "vue";

type Filter = {
  id: number
  text: string
  type: 'all' | 'done' | 'todo'
}

export const filterButtons = ref<Filter[]>([
  {
    id: 0,
    text: 'All',
    type: 'all'
  },
  {
    id: 1,
    text: 'Completed',
    type: 'done'
  },
  {
    id: 2,
    text: 'Uncompleted',
    type: 'todo'
  }
])
