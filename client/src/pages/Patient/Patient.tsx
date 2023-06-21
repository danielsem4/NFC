import { useLoaderData } from "react-router-dom";
import {
  Container,
  PatientImage,
  Card,
  CardContentWrapper,
  Title,
  Text,
} from "./Patient.style";
import patient from "../../assets/img/patient1.png";

interface Patient {
  fullName: string;
  id: string;
  image?: string;
  zehutNumber: string;
  imageUrl: string;
}

const Patient = () => {
  const data = useLoaderData();
  const patients: Patient = data as Patient;

  return (
    <Container>
      <Card>
        <PatientImage title="patient img" src={patients.imageUrl} />
        <CardContentWrapper>
          <Text>Name: {patients.fullName}</Text>
          <Text>ID: {patients.zehutNumber}</Text>
        </CardContentWrapper>
      </Card>
    </Container>
  );
};

export default Patient;
