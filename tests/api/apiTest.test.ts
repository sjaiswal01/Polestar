import { test, expect } from '@playwright/test';
import { environmentConstants } from '../../test-data/environment-constant'


test.describe('API Test Suite', () => {

test('Verify List User GET /users', async ({ request }) => {
    const response = await request.get(environmentConstants.APIBaseUrl+'/api/users?page=2');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.page).toBe(2);
    expect(responseBody.data[0]["id"]).toBe(7);
    expect(responseBody.data[0]["email"]).toBe('michael.lawson@reqres.in');
    expect(responseBody.data[0]["first_name"]).toBe('Michael');
    expect(responseBody.data[0]["last_name"]).toBe('Lawson');
    expect(responseBody.data[0]["avatar"]).toBe('https://reqres.in/img/faces/7-image.jpg');
});

test('Verify single user not found', async ({ request }) => {
    const response = await request.get(environmentConstants.APIBaseUrl+'/api/users/23');
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(404); 
});

test('Verify LIST <RESOURCE>', async ({ request }) => {
    const response = await request.get(environmentConstants.APIBaseUrl+'/api/unknown');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200); 

    const responseBody = await response.json();
    expect(responseBody.total_pages).toBe(2);
    expect(responseBody.total).toBe(12);

});

test(' Verify POST /users', async ({request}) => {
    const payload = {
        "email": "michel.weaver@reqres.in",
        "first_name": "Michel",
        "last_name": "Jorden",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"

    };
    const response = await request.post(`${environmentConstants.APIBaseUrl}/api/users`, {data: payload});
    expect(response.status).toBe(201);

    const responseBody = await response.json();
    expect(responseBody.data.name).toBe(payload.first_name);
    expect(responseBody.data.job).toBe(payload.last_name);
  });

  test(' Verify PUT /users/2', async ({request}) => {
    const payload = {
        "first_name": "Michel",
    };
    const response = await request.put(`${environmentConstants.APIBaseUrl}/api/users/2`, {data:payload});
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(responseBody.data.name).toBe(payload.first_name);
    
  });

  test(' Verify DELETE /users/2', async ({request}) => {
    const response = await request.delete(`${environmentConstants.APIBaseUrl}/api/users/2`);
    expect(response.status).toBe(204);
  });
  

});