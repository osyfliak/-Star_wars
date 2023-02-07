import StarWarsApp from './StarWarsApp/StarWarsApp';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#010101',
      }}
    >
      <StarWarsApp />
    </div>
  );
};
