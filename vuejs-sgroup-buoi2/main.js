const { createApp } = Vue;

createApp({
	data() {
		return {
			classHidden: "hidden",
			searchQuery: "",
			tableColumns: [
				"user",
				"role",
				"status",
				"last activity",
				"join date",
				"actions",
			],
			userData: [
				{
					id: 1,
					name: "John Doe",
					email: "johnDoe@gmail.com",
					avatar: "https://i.pravatar.cc/300",
					role: "admin",
					status: "active",
					lastActivity: "1 min ago",
					joinDate: "2023-06-16T02:56:02.677Z",
					// isShowPopup: false,
				},
				{
					id: 2,
					name: "John User",
					email: "johnDoe@gmail.com",
					avatar: "https://i.pravatar.cc/300",
					role: "user",
					status: "suspended",
					lastActivity: "1 min ago",
					joinDate: "2023-06-16T02:56:02.677Z",
					// isShowPopup: false,
				},
				{
					id: 3,
					name: "John Admin",
					email: "johnDoe@gmail.com",
					avatar: "https://i.pravatar.cc/300",
					role: "admin",
					status: "active",
					lastActivity: "1 min ago",
					joinDate: "2023-06-16T02:56:02.677Z",
					// isShowPopup: false,
				},
			],
		};
	},
	// template: {},
	computed: {
		filteredUsers() {
			return this.userData.filter((user) => {
				return (
					user.name
						.toLowerCase()
						.includes(this.searchQuery.toLowerCase()) ||
					user.email
						.toLowerCase()
						.includes(this.searchQuery.toLowerCase())
				);
			});
		},
	},
	methods: {
		addNewUser() {
			const newUser = {
				name: "Yuh Wepo",
				email: "yuhwepo@gmail.com",
				avatar: "https://i.pravatar.cc/300",
				role: "admin",
				status: "active",
				lastActivity: "1 min ago",
				joinDate: new Date(),
			};
			this.userData.push(newUser);
		},
		onDelete(id) {
			this.filterUser(id);
		},
		filterUser(id) {
			this.userData = this.userData.filter((user) => user.id !== id);
		},
		// closeAllPopup() {
		// 	this
		// },
		showPopup(id) {
			console.log("click");
			this.userData = this.userData.filter((user) => {
				if (user.id === id) {
					user.isShowPopup = !user.isShowPopup;
				} else {
					user.isShowPopup = false;
				}
				return user;
			});
		},
		showPopup2(id) {
			const popups = this.$el.querySelectorAll(`#action-${id}`);
			popups.forEach((popup) => {
				this.closeAllPopup;
				if (popup.dataset.display === "none") {
					popup.dataset.display = "block";
					popup.classList.remove("hidden");
				} else {
					popup.dataset.display = "none";
					popup.classList.add("hidden");
				}
			});
		},
		closeAllPopup(e) {
			const popups = this.$el.querySelectorAll(".popup");
			popups.forEach((popup) => {
				if (popup.dataset.display === "block") {
					popup.dataset.display = "none";
					popup.classList.add("hidden");
				}
			});
		},
	},
}).mount("#app");
