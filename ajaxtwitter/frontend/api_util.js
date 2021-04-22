const APIUtil = {
    followUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            type: "POST",
            dataType: "json",
        })
    },

    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            type: "DELETE",
            dataType: "json",
        });
    },

    searchUsers: queryVal => {
        return $.ajax({
            url: '/users/search',
            method: 'GET',
            dataType: 'json', 
            data: { query: queryVal },
        });
    },


};

module.exports = APIUtil;