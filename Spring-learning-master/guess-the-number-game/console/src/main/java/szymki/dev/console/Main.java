package szymki.dev.console;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import szymki.dev.config.GameConfig;

public class Main {
    private static final Logger log = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        log.info("guess the number game");

        ConfigurableApplicationContext context =
                new AnnotationConfigApplicationContext(GameConfig.class);

        context.close();
    }
}
