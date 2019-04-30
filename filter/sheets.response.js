module.exports = {
    filterXML:((response) => {
        return response.map((data) => {
            return {
                rowId: data.id,
                title: data.title,
                description: data.description,
                userInfo: data.userinfo,
                timestamp: data.timestamp,
                status: data.status
            };
        });
    })
}