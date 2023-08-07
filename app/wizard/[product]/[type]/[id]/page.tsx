export interface WizardParams {
  product: string;
  type: string;
  id: string;
}

interface IProps {
  params: WizardParams;
}

const Wizard = (props: IProps) => {
  const { params } = props;
  const { product, type, id } = params;

  return (
    <>
      <h1>Wizard</h1>
      <h3>product: {product}</h3>
      <h3>type: {type}</h3>
      <h3>id: {id}</h3>
    </>
  );
};

export default Wizard;
