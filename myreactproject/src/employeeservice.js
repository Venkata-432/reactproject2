import axios from 'axios';

const url="http://localhost:10000/whatsappboot";

class EmployeeService {
    createEmployeeRecord(emp){
        return axios.post(url+"/createProfile",emp);
    }
}

export default new EmployeeService();