<template>
    <nav class="py-5">
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="currentPage<=1?' disabled':''">
                <nuxt-link class="page-link"
                 :disabled="currentPage<=1"
                 :to="{path: '/',query:{page:currentPage-1}}">
                    <span aria-hidden="true">&laquo;</span>
                </nuxt-link>
            </li>

            <template v-for="pageNumber in count">
                <li class="page-item disabled" :key="pageNumber" v-if="((pageNumber-1) == count - 1 && Math.abs((pageNumber) - currentPage) > 3)">
                    <nuxt-link class="page-link" :to="{path: '/'}">...</nuxt-link>
                </li>
                <li class="page-item" :key="pageNumber" :class="currentPage===pageNumber?'active':''"
                v-if="(pageNumber > (currentPage-2) && Math.abs((pageNumber) - currentPage) < 3) || (pageNumber-1) == count - 1 || (pageNumber-1) == 0">
                    <nuxt-link class="page-link" :to="{path: '/',query:{page:pageNumber}}" 
                        v-on:click.native="refresh">
                        {{pageNumber}}</nuxt-link>
                </li>
                <li class="page-item disabled" :key="pageNumber" v-if="((pageNumber-1) == 0 && Math.abs((pageNumber) - currentPage) > 2)">
                    <nuxt-link class="page-link" :to="{path: '/'}">...</nuxt-link>
                </li>
            </template>
            
            <li class="page-item" :class="currentPage===count?' disabled':''">
                <nuxt-link class="page-link"
                    :disabled="currentPage===count"
                    tag="button"
                    :to="{path: '/',query:{page:currentPage+1}}" v-on:click.native="refresh">
                        <span aria-hidden="true">&raquo;</span>
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      pageSize: {
        type: Number,
        default: 10
      },
      currentPage:{
        type:Number,
        default: 1
      },
      total:{
        type:Number
      }
    },
    computed:{
      count(){
            return Math.ceil(this.total/this.pageSize);
      },
      pagination_number() {
          return 4;
      }
    },
    methods:{
      getArr(firstNum,lastNum){
        let arr=[];
        for(let i=firstNum;i<=lastNum;i++){
          arr.push(i);
        }
        return arr;
      },
      refresh(e) {
        this.$tiandev.refresh()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
</script>