<h1>ngX Letter Avatar</h1>
ngX Letter Avatar is a library for generate letter avatars easily.

<h3>Install from npm</h3>

```
npm install ngx-letter-avatar
```

<h3>Your Endpoint object should be like this.</h3>

```
person: {
    avatar: {
        url: 'http://www.youravatarurl.com'
    }
    firstName: 'Cem',
    lastName: 'Ezgin,
    // OR
    fullName: 'Cem Ezgin'
}

```

If the avatar object is null letter avatar is going to generated. You can take first and last name seperate or together.

<h3>Usage of component in html</h3>

```html

<letter-avatar person='{{person | json}}'></letter-avatar>

```


<h3>Modify shape properties in scss</h3>

```css

 .shape-avatar {
    width: 55px;
    height:55px;
    border-radius: 50%;
       .letter-avatar {
          padding-top: 18px;
          font-size: 15px;
       }
  }

```
