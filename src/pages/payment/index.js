import TitlePayment from "@/views/TitlePayment/TitlePayment";
import PaddingBox from "@/components/PaddingBox/PaddingBox";
import styles from "../../page.module.css";
import ContactBlock from "@/components/ContactBlock/ContactBlock";
import { Container, Row, Col } from "react-bootstrap";

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <PaddingBox />
        <TitlePayment />
      </main>
      <section className={styles.block + " " + "contacts"}>
        <Container className="my-5">
          <Row>
            {/* Левая колонка */}
            <Col md={12}>
              <h2>Оплата</h2>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>по счету на р/с</h4>
              <h4>ИП Корейво Андрей Юрьевич</h4>
            </Col>
            <Col md={6}>
              <p>
                50% предоплата при заказе свыше 30 тысяч рублей, до 30 тысяч -
                100% оплата (вторая часть оплаты - перед отгрузкой в
                транспортную компанию или перед получением заказа)
              </p>
            </Col>
          </Row>

          <Row>
            {/* Левая колонка */}
            <Col md={12}>
              <h2>Доставка до нас</h2>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Упаковка товара для транспортной компании</h4>
            </Col>
            <Col md={6}>
              <p>
                До 3 футболок или 1 свитшотов/толстовок – бесплатно. Свыше 5
                футболок – 100 р. В упаковку входит: коробка, стрейч пленка,
                общий пакет для товара
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Самовывоз</h4>
            </Col>
            <Col md={6}>
              <p>
                Бесплатно
                <br />
                Из шоу-рума в г. Нижний Новгород, пер. Нартова, 2б
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Доставка по Нижнему Новгороду</h4>
            </Col>
            <Col md={6}>
              <p>
                Курьерская доставка по Нижнему Новгороду:
                <br />/ верхняя часть - 200 р.
                <br />/ нижняя часть - договорная, зависит от удаленности
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Доставка транспортной компанией</h4>
            </Col>
            <Col md={6}>
              <p>
                Стоимость доставки по прайсу ТК
                <br />+ стоимость упаковки
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Бесплатная доставка до транспортной</h4>
            </Col>
            <Col md={6}>
              <p>
                ТК 'Деловые линии' (вторник и четверг)
                <br />
                ТК 'СДЭК' (каждый день)
                <br />
                ТК 'Энергия' (каждый день)
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Доставка 450р.</h4>
            </Col>
            <Col md={6}>
              <p>
                ТК 'Деловые линии' (вторник и четверг)
                <br />
                ТК 'СДЭК' (каждый день)
                <br />
                ТК 'Энергия' (каждый день)
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Доставка Почтой России и ЕМS (по всему миру)</h4>
            </Col>
            <Col md={6}>
              <p>
                Оплата при получении недоступна.
                <br />
                Стоимость доставки Почтой России зависит от удаленности от г.
                Нижний Новгород,
                <br />
                стоимость начинается от 200 р.
              </p>
              <br />
              <p>Доставка до Почты России – бесплатно.</p>
            </Col>
          </Row>

          <Row>
            {/* Левая колонка */}
            <Col md={12}>
              <h2>Доставка до нас</h2>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Информация для доставки</h4>
            </Col>
            <Col md={6}>
              <p>
                г. Нижний Новгород
                <br />
                Переулок Нартова 2Б, с 9 до 17 по будням
              </p>
              <p>
                Получатель ИП (!) Корейво Андрей Юрьевич
                <br />
                Отправка до двери ЗА СЧЁТ ОТПРАВИТЕЛЯ любой удобной для вас ТК.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>СДЭК</h4>
            </Col>
            <Col md={6}>
              <p>до ПВЗ г. Нижний Новгород, ул Бекетова, 35 (NN6)</p>
              <p>
                Получатель ИП (!) Корейво Андрей Юрьевич
                <br />
                Отправка ЗА СЧЁТ ОТПРАВИТЕЛЯ
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>ДЕЛОВЫЕ ЛИНИИ</h4>
            </Col>
            <Col md={6}>
              <p>До офиса г. Нижний Новгород, переулок Нартова, 2б</p>
              <p>
                Получатель ИП (!) Корейво Андрей Юрьевич
                <br />
                Отправка ЗА СЧЁТ ОТПРАВИТЕЛЯ
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <PaddingBox />
      <section className={styles.block + " " + "contacts"}>
        <ContactBlock />
      </section>
    </>
  );
}
