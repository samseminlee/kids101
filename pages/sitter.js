
import { useState } from 'react';

export default function Sitter() {
  const [form, setForm] = useState({ name: '', experience: '', languages: '', region: '', photoUrl: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => alert("시터 등록 완료!");

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">🧑‍🏫 시터 등록</h2>
      <input name="name" placeholder="이름" onChange={handleChange} className="w-full p-2 border mb-2" />
      <textarea name="experience" placeholder="경력" onChange={handleChange} className="w-full p-2 border mb-2" />
      <input name="languages" placeholder="가능 언어" onChange={handleChange} className="w-full p-2 border mb-2" />
      <select name="region" onChange={handleChange} className="w-full p-2 border mb-2">
        <option value="">지역 선택</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Burnaby">Burnaby</option>
        <option value="Coquitlam">Coquitlam</option>
        <option value="Surrey">Surrey</option>
        <option value="Richmond">Richmond</option>
      </select>
      <input name="photoUrl" placeholder="사진 URL" onChange={handleChange} className="w-full p-2 border mb-4" />
      <button onClick={handleSubmit} className="w-full bg-green-600 text-white py-2 rounded">등록하기</button>
    </div>
  );
}
