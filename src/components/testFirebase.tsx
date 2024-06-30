import { useEffect, useState } from 'react';

const FirebaseConfigTest = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getProjectConfig?key=AIzaSyDa-kckOeEKNFoXiYMBcOQWZaaJ_nAzNA8'
        );

        if (!response.ok) {
          throw new Error(
            `Error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.log({ error });
      }
    };

    fetchConfig();
  }, []);

  return (
    <div>
      <h1>Firebase Config Test</h1>

      {config && <pre>{JSON.stringify(config, null, 2)}</pre>}
    </div>
  );
};

export default FirebaseConfigTest;
