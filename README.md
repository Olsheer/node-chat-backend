# Запуск
```
- npm install
- (sudo) mongod
- npm start
```
# Users 
- GET `/users` - повертає всіх користувачів
- GET `/users/:id` - повертає користувача з даним id
- DELETE `/users/:id` - видаляє користувача з даним id
- POST `/users` - додає користувача. Приклад body:
```
    {
        "name": "Duke",
        "email": "duke@crud.com",
        "phone": "2222-320"
    }
  ```
- PUT `/users/:id` - оновлює користувача з даним id. Приклад body:
   ```
   {
        "name": "Robin",
        "email": "robin@crud.com",
        "phone": "2222-320"
    }
    ```

# Messages 
- GET `/messages` - повертає всі повідомлення
- GET `/messages/:id` - повертає повідомлення з даним id
- DELETE `/messages/:id` - видаляє повідомлення з даним id
- POST `/messages` - додає повідомлення. Приклад body:
```
    {
        "senderId": "5b48b2f6a414dc7d56656b6a",
        "receiverId": "5b48c417c0a3430733d24974",
        "text": "Hello, how are you?"
    }
```
- PUT `/messages/:id` - оновлює повідомлення з даним id. Приклад body:
   ```
   {
        "senderId": "5b48b2f6a414dc7d56656b6a",
        "receiverId": "5b48c417c0a3430733d24974",
        "text": "Hi, how are you?"
    }
    ```
