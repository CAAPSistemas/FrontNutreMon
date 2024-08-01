CREATE TABLE IF NOT EXISTS usuarios (
    usuarioid INT AUTO_INCREMENT PRIMARY KEY,
    nombreusuario VARCHAR(255) NOT NULL,
    contrasena CHAR(60) NOT NULL, -- almacenar las contraseñas como hashes
    rol ENUM('admin', 'usuario') NOT NULL,
    INDEX (nombreusuario)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS pacientes (
    pacienteid INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    correoelectronico VARCHAR(255) NOT NULL UNIQUE,
    edad INT,
    sexo ENUM('masculino', 'femenino'),
    INDEX (nombre, apellidos)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS configuracion (
    configuracionid INT AUTO_INCREMENT PRIMARY KEY,
    tema VARCHAR(255),
    notificaciones BOOLEAN DEFAULT TRUE,
    fotoperfil TEXT,
    usuarioid INT,
    FOREIGN KEY (usuarioid) REFERENCES usuarios (usuarioid) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS historialclinico (
    historialid INT AUTO_INCREMENT PRIMARY KEY,
    pacienteid INT,
    fecharegistro DATE NOT NULL,
    descripcionhistorial TEXT,
    enfermedadespreexistentes TEXT,
    medicamentos TEXT,
    FOREIGN KEY (pacienteid) REFERENCES pacientes (pacienteid) ON DELETE CASCADE,
    INDEX (fecharegistro)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS actividadfisica (
    actividadid INT AUTO_INCREMENT PRIMARY KEY,
    pacienteid INT,
    fecharegistro DATE NOT NULL,
    tipoactividad VARCHAR(255),
    duracion DECIMAL(5,2),
    FOREIGN KEY (pacienteid) REFERENCES pacientes (pacienteid) ON DELETE CASCADE,
    INDEX (fecharegistro)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS dieta (
    dietaid INT AUTO_INCREMENT PRIMARY KEY,
    pacienteid INT,
    fecharegistro DATE NOT NULL,
    alimentos TEXT,
    restriccionesdieteticas TEXT,
    FOREIGN KEY (pacienteid) REFERENCES pacientes (pacienteid) ON DELETE CASCADE,
    INDEX (fecharegistro)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS objetivos (
    objetivoid INT AUTO_INCREMENT PRIMARY KEY,
    pacienteid INT,
    fecharegistro DATE NOT NULL,
    objetivo VARCHAR(255),
    FOREIGN KEY (pacienteid) REFERENCES pacientes (pacienteid) ON DELETE CASCADE,
    INDEX (fecharegistro)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS mediciones (
    medicionid INT AUTO_INCREMENT PRIMARY KEY,
    pacienteid INT,
    fechamedicion DATE NOT NULL,
    peso DECIMAL(5,2),
    talla DECIMAL(5,2),
    triceps DECIMAL(5,2),
    biceps DECIMAL(5,2),
    subescapular DECIMAL(5,2),
    crestailiaca DECIMAL(5,2),
    supraespinale DECIMAL(5,2),
    abdominal DECIMAL(5,2),
    muslofrontal DECIMAL(5,2),
    brazorelajado DECIMAL(5,2),
    brazoflexionado DECIMAL(5,2),
    muneca DECIMAL(5,2),
    cintura DECIMAL(5,2),
    cadera DECIMAL(5,2),
    muslomedial DECIMAL(5,2),
    pantorrillamedial DECIMAL(5,2),
    perimetromuneca DECIMAL(5,2),
    FOREIGN KEY (pacienteid) REFERENCES pacientes (pacienteid) ON DELETE CASCADE,
    INDEX (fechamedicion)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS resultados (
    resultadoid INT AUTO_INCREMENT PRIMARY KEY,
    medicionid INT,
    pesoteorico DECIMAL(5,2),
    porcentajepesoteorico DECIMAL(5,2),
    cambiopesoreciente DECIMAL(5,2),
    imc DECIMAL(5,2),
    c DECIMAL(5,2),
    m DECIMAL(5,2),
    densidad DECIMAL(5,2),
    porcentajegrasa DECIMAL(5,2),
    masagrasa DECIMAL(5,2),
    areatotalbrazo DECIMAL(5,2),
    areamuscularbrazo DECIMAL(5,2),
    areagrasabrazo DECIMAL(5,2),
    porcentajegrasabrazo DECIMAL(5,2),
    masamagra DECIMAL(5,2),
    areamuscularbrazodisp DECIMAL(5,2),
    masamuscularesqueletica DECIMAL(5,2),
    porcentajemasamuscularesqueletica DECIMAL(5,2),
    perimetrocintura DECIMAL(5,2),
    indicecinturacadera DECIMAL(5,2),
    indicecinturatalla DECIMAL(5,2),
    FOREIGN KEY (medicionid) REFERENCES mediciones (medicionid) ON DELETE CASCADE
) ENGINE=InnoDB;
-- WHERE AND TRIGGER

-- Crear un TRIGGER para asegurar que no se puedan crear usuarios con el mismo nombre
DELIMITER $$
CREATE TRIGGER check_nombreusuario_unique
BEFORE INSERT ON usuarios
FOR EACH ROW
BEGIN
    IF EXISTS (SELECT 1 FROM usuarios WHERE nombreusuario = NEW.nombreusuario) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El nombre de usuario ya existe.';
    END IF;
END;
$$
DELIMITER ;

-- Crear un TRIGGER para asegurar que no se puedan crear pacientes con el mismo correo electrónico
DELIMITER $$
CREATE TRIGGER check_correoelectronico_unique
BEFORE INSERT ON pacientes
FOR EACH ROW
BEGIN
    IF EXISTS (SELECT 1 FROM pacientes WHERE correoelectronico = NEW.correoelectronico) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El correo electrónico ya existe.';
    END IF;
END;
$$
DELIMITER ;