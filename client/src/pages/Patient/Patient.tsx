import { useLoaderData } from "react-router-dom";
import {
  Container,
  PatientImage,
  Card,
  CardContentWrapper,
  Text,
} from "./Patient.style";
import { MuiNavbar } from "../../components/styledComponents/MuiNavbar";

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
      <MuiNavbar />
      <Card>
        <PatientImage title="patient img" src={patients.imageUrl} />
        <CardContentWrapper>
          <Text>שם: {patients.fullName}</Text>
          <Text>תז. {patients.zehutNumber}</Text>
        </CardContentWrapper>
      </Card>
    </Container>
  );
};

export default Patient;
