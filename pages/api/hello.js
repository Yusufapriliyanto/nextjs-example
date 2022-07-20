// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      'sambutan1': 'Hai, mau tau data yang mendukung pembuatan situs ini? Tidak semuanya terbuka ya.',
      'sambutan2': '/api berisi beberapa data terbuka dan beberapa data internal yang terenkripsi',
      'sambutan3': 'Beberapa data dienkripsi dan ditampilkan sebagai string acak. Jika Anda penasaran, silahkan cari sendiri cara membukanya di internet.',
      'sambutan4': '/api/hello hanya berisi sambutan ini. Cari harta karunnya di path lain'
    }
  )
}
