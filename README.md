# Easier React

Easier React is a React package that lets people develop and create in react with much easier experience.

## Installation

Use the NPM package manager to install Easier React.

```bash
npm i easier-react
```

## Usage

```javascript
import Container from './components/Button';
import TextElement from './components/Text';

function App() {
  const OnBtnClick = () => console.log("HELLO THERE");
  return (
    <div>
      <Container isCentered={true}>
        <Space />
        <TextElement size={40} font="Roboto">
          Hello
        </TextElement>
      </Container>
    </div>
  );
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)