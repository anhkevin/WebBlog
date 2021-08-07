<template>
    <div>
        <ul class="pagination mt-4 mb-0 pl-lg-2 d-flex justify-content-center">
            <li class="page-item" :class="currentPage<=1?' disabled':''">
                <nuxt-link class="page-link btn-box-shadow"
                 :disabled="currentPage<=1"
                 :to="{path: '/',query:{page:currentPage-1}}">
                    <i class="fas fa-angle-left"></i>
                </nuxt-link>
            </li>

            <template v-if="count<pagination_number">
                <li v-for="item in count" :key="item" class="page-item" :class="currentPage===item?'active':''">
                    <nuxt-link class="page-link btn-box-shadow"
                            :to="{path: '/',query:{page:item}}" v-on:click.native="refresh">{{item}}</nuxt-link>
                </li>
            </template>
            <template v-else>
                <template v-if="currentPage <= Math.ceil(pagination_number/2)">
                    <li v-for="item in (pagination_number - 1)" :key="item" class="page-item" :class="currentPage===item?'active':''">
                        <nuxt-link class="page-link btn-box-shadow"
                            :to="{path: '/',query:{page:item}}" v-on:click.native="refresh">{{item}}</nuxt-link>
                    </li>
                    <li v-if="currentPage != (pagination_number-2)" class="page-item disabled">
                        <nuxt-link class="page-link btn-box-shadow" :to="{path: '/'}">...</nuxt-link>
                    </li>
                    <li class="page-item">
                        <nuxt-link class="page-link btn-box-shadow" v-if="count>=(pagination_number)" :to="{path: '/',query:{page:count}}" v-on:click.native="refresh">{{count}}</nuxt-link>
                    </li>
                </template>
                <template v-else>
                    <li class="page-item">
                        <nuxt-link class="page-link btn-box-shadow" :to="{path: '/',query:{page:'1'}}" v-on:click.native="refresh">1</nuxt-link>
                    </li>
                    <li class="page-item disabled">
                        <nuxt-link class="page-link btn-box-shadow" :to="{path: '/'}">...</nuxt-link>
                    </li>
                    <template v-if="(currentPage + Math.floor(pagination_number/2)) < count">
                        <li v-for="item in getArr(currentPage,currentPage+(Math.floor(pagination_number/2)-1))" :key="item" class="page-item" :class="currentPage===item?'active':''">
                            <nuxt-link class="page-link btn-box-shadow"
                                    :to="{path: '/',query:{page:item}}" v-on:click.native="refresh">{{item}}</nuxt-link>
                        </li>
                        <li class="page-item disabled">
                            <nuxt-link class="page-link btn-box-shadow" :to="{path: '/'}">...</nuxt-link>
                        </li>
                        <li class="page-item">
                            <nuxt-link class="page-link btn-box-shadow" :to="{path: '/',query:{page:count}}" v-on:click.native="refresh">{{count}}</nuxt-link>
                        </li>
                    </template>
                    <template v-else>
                        <li v-for="item in getArr(count-(pagination_number-2),count)" :key="item" class="page-item" :class="currentPage===item?'active':''">
                            <nuxt-link class="page-link btn-box-shadow"
                                :to="{path: '/',query:{page:item}}" v-on:click.native="refresh">{{item}}</nuxt-link>
                        </li>
                    </template>
                </template>
            </template>
            
            <li class="page-item" :class="currentPage===count?' disabled':''">
                <nuxt-link class="page-link btn-box-shadow"
                    :disabled="currentPage===count"
                    tag="button"
                    :to="{path: '/',query:{page:currentPage+1}}" v-on:click.native="refresh">
                        <i class="fas fa-angle-right"></i>
                </nuxt-link>
            </li>
        </ul>

    </div>
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
        this.$nuxt.refresh()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
</script>