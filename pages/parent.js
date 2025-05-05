
import { useState } from 'react';

export default function Parent() {
  const [form, setForm] = useState({ parentName: '', startTime: '', hours: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => alert("돌봄 신청 완료! 결제는 별도로 진행됩니다.");

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">👶 부모 돌봄 신청</h2>
      <input name="parentName" placeholder="부모 이름" onChange={handleChange} className="w-full p-2 border mb-2" />
      <input name="startTime" type="datetime-local" onChange={handleChange} className="w-full p-2 border mb-2" />
      <input name="hours" type="number" placeholder="몇 시간 돌봄" onChange={handleChange} className="w-full p-2 border mb-4" />
      <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded">신청하기</button>
    </div>
  );
}
