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
                name: "ALL",
                status: true
            },
            {
                id: 2,
                icon: "far fa-gem",
                name: "Design",
                status: false
            },
            {
                id: 3,
                icon: "far fa-images",
                name: "Photos",
                status: false
            },
            {
                id: 4,
                icon: "fas fa-map-pin",
                name: "Art",
                status: false
            },
        ],
    },
    methods: {
        // update main filter css active status
        updateFilterStatus(item) {
            this.filter.forEach(function(item, i) {
                item.status = false
            });

            item.status = true
        },
    },
})