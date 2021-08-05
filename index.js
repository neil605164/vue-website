Vue.component("perpage", {
    props: ["page", "totalCount", "limit"],
    data: function() {
        return {
            pageActive: 1
        }
    },
    template: `
    <div id="page">
        <ul>
            <li @click="preventPage">«</li>
            <li v-for="page in totalPage" :key="page" @click.prevent="currentPage(page)" :class="{buttonActive : pageActive === page}">{{page}}</li>
            <li @click="nextPage">»</li>
        </ul>
    </div>
    `,
    methods: {
        // 前一頁
        preventPage() {
            this.$emit('page', this.pageActive - 1)
            this.pageActive = this.pageActive - 1
        },
        // 下一頁
        nextPage() {
            this.$emit('page', this.pageActive + 1)
            this.pageActive = this.pageActive + 1
        },
        // 當前頁數
        currentPage(page) {
            this.emitPage = page
            this.$emit('page', this.pageActive = page)
        }
    },
    computed: {
        // 計算總頁數
        totalPage() {
            if (this.totalCount == undefined) {
                return 0
            }

            return Math.ceil(this.totalCount / this.limit)
        },
    }
})

var app = new Vue({
    el: "#app",
    data: {
        menuList: [{
                id: 1,
                name: "PORTFOLIO",
                icon: "fas fa-th-large",
                router: "title",
            },
            {
                id: 2,
                name: "ABOUT",
                icon: "fas fa-user",
                router: "about",
            },
            {
                id: 3,
                name: "CONTENT",
                icon: "fas fa-envelope",
                router: "content"
            },
        ],
        footerIcon: [
            "fab fa-facebook-square",
            "fab fa-instagram",
            "fab fa-snapchat",
            "fab fa-pinterest-p",
            "fab fa-twitter",
            "fab fa-linkedin-in",
        ],
        filter: [{
                id: 1,
                icon: "",
                name: "ALL"
            },
            {
                id: 2,
                icon: "far fa-gem",
                name: "Design"
            },
            {
                id: 3,
                icon: "far fa-images",
                name: "Photos"
            },
            {
                id: 4,
                icon: "fas fa-map-pin",
                name: "Art"
            },
        ],
        cardlist: [{
                id: 1,
                image: "/images/montain.jpeg",
                title: "Lorem Ipsum",
                content: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
                tag: "Design"
            },
            {
                id: 2,
                image: "/images/lights.jpeg",
                title: "Lorem Ipsum",
                content: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
                tag: "Photos"
            }, {
                id: 3,
                image: "/images/nature.jpeg",
                title: "Lorem Ipsum",
                content: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
                tag: "Art"
            }, {
                id: 4,
                image: "/images/p1.jpeg",
                title: "Lorem Ipsum",
                content: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
                tag: "Design"
            }, {
                id: 5,
                image: "/images/p2.jpeg",
                title: "Lorem Ipsum",
                content: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
                tag: "Design"
            }, {
                id: 6,
                image: "/images/p3.jpeg",
                title: "Lorem Ipsum",
                content: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
                tag: "Photos"
            },
            {
                id: 7,
                image: "/images/montain.jpeg",
                title: "Lorem Ipsum",
                content: "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
                tag: "Photos"
            },
        ],
        photoList: ["/images/avatar_g.jpeg", "/images/me2.jpeg"],
        filterActive: "ALL",
        progessList: [{
            name: "Photography",
            progess: 95,
        }, {
            name: "Web Design",
            progess: 85,
        }, {
            name: "Photoshop",
            progess: 80,
        }],
        formList: {
            Name: "",
            Email: "",
            Message: "",
        },
        planList: [{
                id: 1,
                title: "Basic",
                contents: ["Web Design", "Photography", "1GB Storage", "Mail Support"],
                charge: 10,
            },
            {
                id: 2,
                title: "Pro",
                contents: ["Web Design", "Photography", "50GB Storage", "Mail Support"],
                charge: 25,
            },
            {
                id: 3,
                title: "Premium",
                contents: ["Web Design", "Photography", "Unlimited Storage", "Mail Support"],
                charge: 25,
            },
        ],
        fromList: {
            name: "",
            email: "",
            message: "",
        },
        page: 1,
        totalCount: 0,
        limit: 3,
    },
    mounted() {
        this.totalCount = this.cardlist.length
    },
    // 計算,篩選,過濾資料後，在渲染到網頁上
    computed: {
        filterCardList() {
            vm = this

            begin = (vm.page - 1) * vm.limit
            end = vm.limit + begin
            newCardList = vm.cardlist.slice(begin, end)

            if (vm.filterActive === "ALL") {
                return newCardList
            }

            return newCardList.filter(item => item.tag === vm.filterActive)
        }
    },
    methods: {
        SendFormData() {
            vm = this
            console.log(vm.fromList.email, vm.fromList.message, vm.fromList.name, "Send Successfully")
        },
        newPage(page) {
            this.page = page
        },
    },
})