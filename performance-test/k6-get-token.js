import http from 'k6/http';

export default function () {
  let response = http.get('http://localhost:8080/oauth/token');
  console.log(response.status)
}