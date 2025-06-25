import type React from "react"
import { useState } from "react"
import "../styles/reservas.css"

interface ReservationData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  specialRequests: string
}

const RestaurantReservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleInputChange = (field: keyof ReservationData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        specialRequests: "",
      })
    }, 3000)
  }

  const timeSlots: string[] = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ]
  const guestOptions: string[] = ["1", "2", "3", "4", "5", "6", "7", "8+"]

  const CalendarIcon: React.FC = () => (
    <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )

  const ClockIcon: React.FC = () => (
    <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )

  const UsersIcon: React.FC = () => (
    <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  )

  const PhoneIcon: React.FC = () => (
    <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )

  const UserIcon: React.FC = () => (
    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )

  const MailIcon: React.FC = () => (
    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )

  if (isSubmitted) {
    return (
      <section className="reservation-section">
        <div className="container">
          <div style={{ maxWidth: "32rem", margin: "0 auto" }}>
            <div className="card success-card">
              <div className="success-content">
                <div className="success-icon">
                  <CalendarIcon />
                </div>
                <h2 className="success-title">ありがとうございます！</h2>
                <p className="success-message">Sua reserva foi confirmada com sucesso!</p>
                <p className="success-note">Você receberá um email de confirmação em breve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="reservation-section" id="reserva">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1 className="main-title">
            桜 <span className="brand-name">Umami</span> 桜
          </h1>
          <p className="subtitle">Restaurante Japonês Autêntico</p>
          <p className="description">
            Reserve sua mesa e desfrute de uma experiência gastronômica única com os sabores tradicionais do Japão
          </p>
        </div>

        <div className="main-grid">
          {/* Informações do Restaurante */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <CalendarIcon />
                  Informações da Reserva
                </h3>
              </div>
              <div className="card-content">
                <div className="info-item">
                  <ClockIcon />
                  <div className="info-content">
                    <h4>Horário de Funcionamento</h4>
                    <p>Terça a Domingo: 17:00 - 23:00</p>
                    <p className="special-note">Fechado às segundas-feiras</p>
                  </div>
                </div>
                <div className="info-item">
                  <UsersIcon />
                  <div className="info-content">
                    <h4>Capacidade</h4>
                    <p>Até 8 pessoas por reserva</p>
                  </div>
                </div>
                <div className="info-item">
                  <PhoneIcon />
                  <div className="info-content">
                    <h4>Contato</h4>
                    <p>(11) 9999-8888</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
  <div className="card-content">
    <div className="menu-section">
      <h3>Ofertas Especiais</h3>

      <div className="menu-item">
        <span>🍣 Sushi Clássico</span>
        <span className="menu-price">R$ 25,00</span>
      </div>

      <div className="menu-item">
        <span>🍜 Shoyu Ramen</span>
        <span className="menu-price">R$ 38,00</span>
      </div>

      <div className="menu-item">
        <span>🥢 Temaki de Salmão</span>
        <span className="menu-price">R$ 15,00</span>
      </div>

      <div className="menu-item">
        <span>🍧 Anmitsu</span>
        <span className="menu-price">R$ 18,00</span>
      </div>
    </div>
  </div>
</div>

          </div>

          {/* Formulário de Reserva */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Faça sua Reserva</h3>
              <p className="card-description">Preencha os dados abaixo para garantir sua mesa</p>
            </div>
            <div className="card-content">
              <form onSubmit={handleSubmit} className="form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <UserIcon />
                      Nome Completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <MailIcon />
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <PhoneIcon />
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-row-three">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      <CalendarIcon />
                      Data
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      required
                      className="form-input"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time" className="form-label">
                      <ClockIcon />
                      Horário
                    </label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange("time", e.target.value)}
                      required
                      className="form-select"
                    >
                      <option value="">Selecione</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests" className="form-label">
                      <UserIcon/>
                      Pessoas
                    </label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => handleInputChange("guests", e.target.value)}
                      required
                      className="form-select"
                    >
                      <option value="">Qtd</option>
                      {guestOptions.map((guests) => (
                        <option key={guests} value={guests}>
                          {guests} {guests === "1" ? "pessoa" : "pessoas"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="requests" className="form-label">
                    Observações Especiais
                  </label>
                  <textarea
                    id="requests"
                    placeholder="Alergias, preferências alimentares, ocasião especial..."
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="submit-button">
                  {isSubmitting ? "Processando..." : "Confirmar Reserva"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Em caso de dúvidas, entre em contato conosco pelo telefone (11) 9999-8888</p>
          <p className="policy">
            Política de cancelamento: Cancelamentos devem ser feitos com até 2 horas de antecedência
          </p>
        </div>
      </div>
    </section>
  )
}

export default RestaurantReservation
