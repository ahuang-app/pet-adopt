import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

const petTypes = ['全部', '狗', '猫', '其他']
const locations = ['全部', '北京', '上海', '广州', '深圳', '成都', '杭州', '南京', '苏州']

export default function SearchBar() {
  const [type, setType] = useState('全部')
  const [location, setLocation] = useState('全部')
  const navigate = useNavigate()

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (type !== '全部') params.set('type', type)
    if (location !== '全部') params.set('location', location)
    navigate(`/pets?${params.toString()}`)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 bg-white/80 backdrop-blur-sm p-2 rounded-btn border-2 border-dashed border-warm-200 shadow-md">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2 rounded-xl bg-warm-50 border-2 border-dashed border-warm-200 text-warm-700 font-body text-sm focus:outline-none focus:border-warm-400"
      >
        {petTypes.map((t) => (
          <option key={t} value={t}>{t === '全部' ? '动物类型' : t}</option>
        ))}
      </select>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-2 rounded-xl bg-warm-50 border-2 border-dashed border-warm-200 text-warm-700 font-body text-sm focus:outline-none focus:border-warm-400"
      >
        {locations.map((l) => (
          <option key={l} value={l}>{l === '全部' ? '所在地区' : l}</option>
        ))}
      </select>
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-warm-500 text-white font-heading rounded-xl shadow-[3px_3px_0_#C2410C] hover:shadow-[1px_1px_0_#C2410C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
      >
        <Search className="w-4 h-4" />
        搜索
      </button>
    </div>
  )
}
