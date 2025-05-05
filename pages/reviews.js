
import { useState } from 'react';

export default function Reviews() {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const handleSubmit = () => alert("리뷰가 등록되었습니다!");

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">🌟 시터 리뷰</h2>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="리뷰 작성" className="w-full p-2 border mb-2" />
      <select value={rating} onChange={(e) => setRating(e.target.value)} className="w-full p-2 border mb-4">
        {[1,2,3,4,5].map((r) => (<option key={r} value={r}>{r} 점</option>))}
      </select>
      <button onClick={handleSubmit} className="w-full bg-yellow-500 text-white py-2 rounded">리뷰 남기기</button>
    </div>
  );
}
