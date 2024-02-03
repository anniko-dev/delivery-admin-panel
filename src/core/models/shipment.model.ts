interface Address {
  id: number;
  latitude: string;
  longitude: string;
  name: string;
}

interface Carrier {
  id: number;
  name: string;
  phone: string;
  vehicle: string;
  vehicle_number: string;
}

interface Status {
  id: number;
  name: string;
  description: string;
  created_at: string | null;
}

interface Documents {
  id: number;
  type: string;
  link: string;
}

export interface Shipment {
  id: number;
  name: string;
  serial_number: string;
  description: string;
  volume: number;
  weight: number;
  created_at: string;
  receiver_name: string;
  receiver_contact: string;
  send_address: Address;
  receiver_address: Address;
  carrier: Carrier;
  status: Status[];
  documents: Documents[];
}
