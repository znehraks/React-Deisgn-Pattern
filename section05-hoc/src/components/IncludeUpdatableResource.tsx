import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserType } from "./UserInfo";

const toCapital = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export const includeUpdatableResource = <P extends object>(
  Component: React.ComponentType<P>,
  resourceUrl: string,
  resourceName: string
) => {
  return (props: P) => {
    const [initialResource, setInitialResource] = useState<UserType | null>(
      null
    );
    const [resource, setResource] = useState<UserType | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`http://localhost:9090${resourceUrl}`);
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    const onChange = (updates: UserType) => {
      setResource((prev) => ({ ...prev, ...updates }));
    };

    const onPost = async () => {
      const response = await axios.post(`http://localhost:9090${resourceUrl}`, {
        [resourceName]: resource,
      });
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onReset = () => {
      setResource(initialResource);
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChange,
      [`onPost${toCapital(resourceName)}`]: onPost,
      [`onReset${toCapital(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
