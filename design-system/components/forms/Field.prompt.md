Label + hint/error wrapper for any single control. Always wire `htmlFor` to the control `id`.

```jsx
<Field label="Institutional email" htmlFor="email" hint="We reply within five working days" required>
  <Input id="email" type="email" placeholder="name@university.edu" />
</Field>
```
