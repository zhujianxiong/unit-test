var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);

//define address
const ADDRESS = "http://localhost:8080";
//open a http connection
var requester = chai.request(ADDRESS);
describe('api测试',function () {

  it('post /datatag/tagcol/dtCooperation/taggroup 应该返回包含legendData字段的数据',function (done) {
    chai.request(ADDRESS).post('/datatag/tagcol/dtCooperation/taggroup')
      .end((err,res)=>{
        var data = JSON.parse(res.text);
        expect(res).to.have.status(200);
        // expect(data.data).to.have.ownProperty('legendData');
        done();
      })
  });
})
