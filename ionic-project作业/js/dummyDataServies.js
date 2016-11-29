/**
 * Created by aoyolo on 16/11/23.
 */

angular.module('myapp.dummyDataService', ['ngResource'])
    .factory('MyliveFactory', function ($rootScope, $resource, G) {
        var resource = $resource(G.api,{},{
            query:{
                method:'get',
                timeout:20000
            }
        });
    var myliveData = [
        { id: 11, type: '1', img: 'life/img/logo/kfc.jpg', loc: '肯德基（顺义隆华店）', star: ['energized','energized','energized','energized','energized'], spend: 27, reservation: 156, distance: 1.8, display: true},
        { id: 12, type: '1', img: 'life/img/logo/McDonalds.jpg', loc: '麦当劳（顺义西单店）', star: ['energized','energized','energized','energized','dark'], spend: 36, reservation: 226, distance: 2.1, display: true},
        { id: 13, type: '1', img: 'life/img/logo/pizza.jpg', loc: '必胜客（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 78, reservation: 33, distance: 2.2, display: true},
        { id: 14, type: '1', img: 'life/img/logo/qiaojiangnan.jpg', loc: '俏江南（顺义新世界店）', star: ['energized','energized','energized','energized','dark'], spend: 108, reservation: 33, distance: 2.2, display: true},
        { id: 15, type: '1', img: 'life/img/logo/haidilao.jpg', loc: '海底捞（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 88, reservation: 123, distance: 2.2, display: true},
        { id: 16, type: '1', img: 'life/img/logo/xiabu.jpg', loc: '呷哺（顺义宜宾店）', star: ['energized','energized','energized','energized','energized'], spend: 50, reservation: 133, distance: 3.8, display: true},
        { id: 21, type: '2', img: 'life/img/logo/alibuyi.jpg', loc: '阿布莱依（顺义隆华店）', star: ['energized','energized','energized','energized','energized'], spend: 27, reservation: 156, distance: 1.8, display: true},
        { id: 22, type: '2', img: 'life/img/logo/angwei.jpg', loc: '昂威（顺义西单店）', star: ['energized','energized','energized','energized','dark'], spend: 36, reservation: 226, distance: 2.1, display: true},
        { id: 23, type: '2', img: 'life/img/logo/palma.jpg', loc: '彪马（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 78, reservation: 33, distance: 2.2, display: true},
        { id: 24, type: '2', img: 'life/img/logo/taizilong.jpg', loc: '太子龙（顺义新世界店）', star: ['energized','energized','energized','energized','dark'], spend: 108, reservation: 33, distance: 2.2, display: true},
        { id: 25, type: '2', img: 'life/img/logo/yiyi.jpg', loc: '依依（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 88, reservation: 123, distance: 2.2, display: true},
        { id: 26, type: '2', img: 'life/img/logo/yifanni.jpg', loc: '依凡尼（顺义宜宾店）', star: ['energized','energized','energized','energized','energized'], spend: 50, reservation: 133, distance: 3.8, display: true},
        { id: 31, type: '3', img: 'life/img/logo/kfc.jpg', loc: '肯德基（顺义隆华店）', star: ['energized','energized','energized','energized','energized'], spend: 27, reservation: 156, distance: 1.8, display: true},
        { id: 32, type: '3', img: 'life/img/logo/McDonalds.jpg', loc: '麦当劳（顺义西单店）', star: ['energized','energized','energized','energized','dark'], spend: 36, reservation: 226, distance: 2.1, display: true},
        { id: 33, type: '3', img: 'life/img/logo/pizza.jpg', loc: '必胜客（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 78, reservation: 33, distance: 2.2, display: true},
        { id: 34, type: '3', img: 'life/img/logo/qiaojiangnan.jpg', loc: '俏江南（顺义新世界店）', star: ['energized','energized','energized','energized','dark'], spend: 108, reservation: 33, distance: 2.2, display: true},
        { id: 35, type: '3', img: 'life/img/logo/haidilao.jpg', loc: '海底捞（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 88, reservation: 123, distance: 2.2, display: true},
        { id: 36, type: '3', img: 'life/img/logo/xiabu.jpg', loc: '呷哺（顺义宜宾店）', star: ['energized','energized','energized','energized','energized'], spend: 50, reservation: 133, distance: 3.8, display: true}
    ];

    return {
        getMylive:function(){
            resource.query({
                a:'getPortalList',
                catid:20,
                page:1
            },function(r){
                myliveData = r.result;
                $rootScope.$broadcast('updateMylive')
            })
        },
        getMyliveData:function(){
            return myliveData;
        }
    }
})