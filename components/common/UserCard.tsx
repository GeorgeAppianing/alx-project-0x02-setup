import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{email}</p>
      <p className="text-sm text-gray-600">
        {address.street}, {address.city}
      </p>
    </div>
  );
}